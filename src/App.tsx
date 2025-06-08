import { useEffect, useRef } from "react";
import "./App.css";
import gsap from "gsap";

function App() {
  const maskRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const moveMask = (e: MouseEvent) => {
      // Normalize coordinates to [-50, 50] (centered at 0)
      const x = ((e.clientX / window.innerWidth) * 100) - 50;
      const y = ((e.clientY / window.innerHeight) * 100) - 50;

      // Define movement ranges (adjust multipliers for sensitivity)
      const point1Movement = x * 0.3;  // ±15% from 80% → [65%, 95%]
      const point2Movement = x * 0.7;  // ±35% from 20% → [-15%, 55%]
      const point3Movement = x * 0.5;  // ±25% from 50% → [25%, 75%]
      const point4Movement = y * 0.5; // Vertical movement

      // Calculate points with custom constraints
      const point1 = Math.min(90, Math.max(60, 80 + point1Movement)); // 60%-90%
      const point2 = Math.min(100, Math.max(10, 20 + point2Movement)); // 10%-100%
      const point3 = 50 + point3Movement; // 25%-75%
      const point4 = 50 + point4Movement; // Vertical center

      // Clamp all values to [0%, 100%] (safety check)
      const clamp = (num: number) => Math.min(100, Math.max(0, num));

      gsap.to(maskRef.current, {
        clipPath: `polygon(
          ${clamp(point3)}% ${clamp(point4)}%, 
          ${clamp(point1)}% 0, 
          100% 0, 
          100% 100%, 
          ${clamp(point1)}% 100%, 
          ${clamp(point3)}% ${clamp(point4)}%, 
          ${clamp(point2)}% 100%, 
          0 100%, 
          0 0, 
          ${clamp(point2)}% 0
        )`,
        ease: "power1.out",
        duration: 0.3,
      });
    };

    window.addEventListener("mousemove", moveMask);
    return () => window.removeEventListener("mousemove", moveMask);
  }, []);

  return (
    <div className="h-screen w-full flex justify-center p-20 items-center bg-neutral-900 relative overflow-hidden">
      <div
        ref={maskRef}
        className="size-[90%] rounded-3xl absolute z-10 bg-orange-500"
        style={{
          clipPath: "polygon(50% 50%, 80% 0, 100% 0, 100% 100%, 80% 100%, 50% 50%, 20% 100%, 0 100%, 0 0, 20% 0)",
        }}
      />
    </div>
  );
}

export default App;
