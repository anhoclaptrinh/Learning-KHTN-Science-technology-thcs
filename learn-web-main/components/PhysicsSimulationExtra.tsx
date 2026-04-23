"use client";

import { useState, useEffect, useRef } from "react";

// Projectile Motion Simulation
export function ProjectileSimulation() {
  const [angle, setAngle] = useState(45);
  const [velocity, setVelocity] = useState(30);
  const [isRunning, setIsRunning] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number | undefined>(undefined);
  const timeRef = useRef(0);

  const g = 9.8; // gravity

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw ground
      ctx.strokeStyle = "#6B7280";
      ctx.lineWidth = 3;
      ctx.beginPath();
      ctx.moveTo(0, 350);
      ctx.lineTo(600, 350);
      ctx.stroke();

      // Calculate trajectory
      const angleRad = (angle * Math.PI) / 180;
      const vx = velocity * Math.cos(angleRad);
      const vy = velocity * Math.sin(angleRad);

      if (isRunning) {
        const t = timeRef.current * 0.05;
        const x = vx * t * 10;
        const y = vy * t * 10 - 0.5 * g * t * t * 10;

        // Draw projectile
        if (y >= 0 && x <= 600) {
          ctx.fillStyle = "#EF4444";
          ctx.beginPath();
          ctx.arc(50 + x, 350 - y, 10, 0, 2 * Math.PI);
          ctx.fill();

          // Draw velocity vector
          ctx.strokeStyle = "#3B82F6";
          ctx.lineWidth = 2;
          ctx.beginPath();
          ctx.moveTo(50 + x, 350 - y);
          const vxCurrent = vx;
          const vyCurrent = vy - g * t;
          ctx.lineTo(50 + x + vxCurrent * 2, 350 - y - vyCurrent * 2);
          ctx.stroke();

          timeRef.current += 1;
        } else {
          setIsRunning(false);
          timeRef.current = 0;
        }
      }

      // Draw trajectory path (parabola)
      ctx.strokeStyle = "#9CA3AF";
      ctx.setLineDash([5, 5]);
      ctx.lineWidth = 2;
      ctx.beginPath();
      for (let i = 0; i <= 100; i++) {
        const t = i * 0.1;
        const x = vx * t * 10;
        const y = vy * t * 10 - 0.5 * g * t * t * 10;
        if (y >= 0 && x <= 550) {
          if (i === 0) {
            ctx.moveTo(50 + x, 350 - y);
          } else {
            ctx.lineTo(50 + x, 350 - y);
          }
        }
      }
      ctx.stroke();
      ctx.setLineDash([]);

      // Draw cannon
      ctx.save();
      ctx.translate(50, 350);
      ctx.rotate(-angleRad);
      ctx.fillStyle = "#374151";
      ctx.fillRect(0, -5, 40, 10);
      ctx.restore();

      // Calculate range
      const range = (velocity * velocity * Math.sin(2 * angleRad)) / g;
      const maxHeight = (velocity * velocity * Math.sin(angleRad) * Math.sin(angleRad)) / (2 * g);

      ctx.fillStyle = "#1F2937";
      ctx.font = "14px Arial";
      ctx.fillText(`Tầm xa: ${range.toFixed(1)} m`, 10, 30);
      ctx.fillText(`Độ cao max: ${maxHeight.toFixed(1)} m`, 10, 50);

      if (isRunning) {
        animationRef.current = requestAnimationFrame(draw);
      }
    };

    draw();

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [isRunning, angle, velocity]);

  const handleReset = () => {
    setIsRunning(false);
    timeRef.current = 0;
  };

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h3 className="text-2xl font-bold text-gray-800 mb-2">Chuyển Động Ném Xiên</h3>
        <p className="text-gray-600">Quỹ đạo parabol</p>
      </div>

      <div className="bg-white rounded-xl p-6 flex justify-center">
        <canvas ref={canvasRef} width={600} height={400} className="border-2 border-gray-200 rounded-lg" />
      </div>

      <div className="grid md:grid-cols-3 gap-4">
        <div className="bg-white rounded-xl p-6">
          <label className="block text-gray-700 font-semibold mb-3">
            Góc ném: {angle}°
          </label>
          <input
            type="range"
            min="15"
            max="75"
            value={angle}
            onChange={(e) => setAngle(Number(e.target.value))}
            className="w-full h-3 bg-gray-200 rounded-lg appearance-none cursor-pointer"
            disabled={isRunning}
          />
        </div>

        <div className="bg-white rounded-xl p-6">
          <label className="block text-gray-700 font-semibold mb-3">
            Vận tốc: {velocity} m/s
          </label>
          <input
            type="range"
            min="10"
            max="50"
            value={velocity}
            onChange={(e) => setVelocity(Number(e.target.value))}
            className="w-full h-3 bg-gray-200 rounded-lg appearance-none cursor-pointer"
            disabled={isRunning}
          />
        </div>

        <div className="bg-white rounded-xl p-6 flex items-center justify-center gap-2">
          <button
            onClick={() => {
              setIsRunning(!isRunning);
              if (!isRunning) timeRef.current = 0;
            }}
            className={`px-6 py-3 rounded-xl font-bold text-white transition-all ${
              isRunning ? "bg-red-500 hover:bg-red-600" : "bg-green-500 hover:bg-green-600"
            }`}
          >
            {isRunning ? "⏸ Dừng" : "▶ Bắn"}
          </button>
          <button
            onClick={handleReset}
            className="px-6 py-3 rounded-xl font-bold bg-gray-500 text-white hover:bg-gray-600 transition-all"
          >
            🔄
          </button>
        </div>
      </div>

      <div className="bg-purple-50 border-2 border-purple-200 rounded-xl p-4">
        <h4 className="font-bold text-purple-900 mb-2">💡 Giải thích:</h4>
        <ul className="space-y-1 text-purple-800">
          <li>• Quỹ đạo là đường parabol</li>
          <li>• Góc 45° cho tầm xa lớn nhất</li>
          <li>• Vận tốc càng lớn, tầm xa càng xa</li>
          <li>• Mũi tên xanh: Vector vận tốc</li>
        </ul>
      </div>
    </div>
  );
}

// Collision Simulation
export function CollisionSimulation() {
  const [isRunning, setIsRunning] = useState(false);
  const [elasticity, setElasticity] = useState(1); // 1 = elastic, 0 = inelastic
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number | undefined>(undefined);
  
  const ball1Ref = useRef({ x: 100, vx: 3, mass: 2, radius: 20 });
  const ball2Ref = useRef({ x: 500, vx: -2, mass: 1, radius: 15 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const ball1 = ball1Ref.current;
      const ball2 = ball2Ref.current;

      if (isRunning) {
        // Update positions
        ball1.x += ball1.vx;
        ball2.x += ball2.vx;

        // Check collision
        const distance = Math.abs(ball1.x - ball2.x);
        if (distance <= ball1.radius + ball2.radius) {
          // Collision detected - exchange velocities (simplified)
          const v1 = ball1.vx;
          const v2 = ball2.vx;
          const m1 = ball1.mass;
          const m2 = ball2.mass;

          // Conservation of momentum and energy
          ball1.vx = ((m1 - elasticity * m2) * v1 + (1 + elasticity) * m2 * v2) / (m1 + m2);
          ball2.vx = ((m2 - elasticity * m1) * v2 + (1 + elasticity) * m1 * v1) / (m1 + m2);

          // Separate balls to prevent overlap
          const overlap = (ball1.radius + ball2.radius) - distance;
          ball1.x -= overlap / 2;
          ball2.x += overlap / 2;
        }

        // Boundary check
        if (ball1.x - ball1.radius <= 0 || ball1.x + ball1.radius >= 600) {
          ball1.vx *= -elasticity;
          ball1.x = Math.max(ball1.radius, Math.min(600 - ball1.radius, ball1.x));
        }
        if (ball2.x - ball2.radius <= 0 || ball2.x + ball2.radius >= 600) {
          ball2.vx *= -elasticity;
          ball2.x = Math.max(ball2.radius, Math.min(600 - ball2.radius, ball2.x));
        }
      }

      // Draw balls
      ctx.fillStyle = "#EF4444";
      ctx.beginPath();
      ctx.arc(ball1.x, 200, ball1.radius, 0, 2 * Math.PI);
      ctx.fill();

      ctx.fillStyle = "#3B82F6";
      ctx.beginPath();
      ctx.arc(ball2.x, 200, ball2.radius, 0, 2 * Math.PI);
      ctx.fill();

      // Draw velocities
      ctx.strokeStyle = "#1F2937";
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(ball1.x, 200);
      ctx.lineTo(ball1.x + ball1.vx * 10, 200);
      ctx.stroke();

      ctx.beginPath();
      ctx.moveTo(ball2.x, 200);
      ctx.lineTo(ball2.x + ball2.vx * 10, 200);
      ctx.stroke();

      // Display info
      ctx.fillStyle = "#1F2937";
      ctx.font = "14px Arial";
      ctx.fillText(`Bi đỏ: v = ${ball1.vx.toFixed(1)} m/s, m = ${ball1.mass} kg`, 10, 30);
      ctx.fillText(`Bi xanh: v = ${ball2.vx.toFixed(1)} m/s, m = ${ball2.mass} kg`, 10, 50);

      if (isRunning) {
        animationRef.current = requestAnimationFrame(draw);
      }
    };

    draw();

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [isRunning, elasticity]);

  const handleReset = () => {
    setIsRunning(false);
    ball1Ref.current = { x: 100, vx: 3, mass: 2, radius: 20 };
    ball2Ref.current = { x: 500, vx: -2, mass: 1, radius: 15 };
  };

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h3 className="text-2xl font-bold text-gray-800 mb-2">Va Chạm</h3>
        <p className="text-gray-600">Bảo toàn động lượng</p>
      </div>

      <div className="bg-white rounded-xl p-6 flex justify-center">
        <canvas ref={canvasRef} width={600} height={400} className="border-2 border-gray-200 rounded-lg" />
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        <div className="bg-white rounded-xl p-6">
          <label className="block text-gray-700 font-semibold mb-3">
            Độ đàn hồi: {elasticity === 1 ? "Đàn hồi hoàn toàn" : elasticity === 0 ? "Mềm hoàn toàn" : "Một phần"}
          </label>
          <input
            type="range"
            min="0"
            max="1"
            step="0.1"
            value={elasticity}
            onChange={(e) => setElasticity(Number(e.target.value))}
            className="w-full h-3 bg-gray-200 rounded-lg appearance-none cursor-pointer"
            disabled={isRunning}
          />
          <div className="flex justify-between text-sm text-gray-500 mt-2">
            <span>Mềm</span>
            <span>Đàn hồi</span>
          </div>
        </div>

        <div className="bg-white rounded-xl p-6 flex items-center justify-center gap-2">
          <button
            onClick={() => setIsRunning(!isRunning)}
            className={`px-6 py-3 rounded-xl font-bold text-white transition-all ${
              isRunning ? "bg-red-500 hover:bg-red-600" : "bg-green-500 hover:bg-green-600"
            }`}
          >
            {isRunning ? "⏸ Dừng" : "▶ Chạy"}
          </button>
          <button
            onClick={handleReset}
            className="px-6 py-3 rounded-xl font-bold bg-gray-500 text-white hover:bg-gray-600 transition-all"
          >
            🔄 Reset
          </button>
        </div>
      </div>

      <div className="bg-purple-50 border-2 border-purple-200 rounded-xl p-4">
        <h4 className="font-bold text-purple-900 mb-2">💡 Giải thích:</h4>
        <ul className="space-y-1 text-purple-800">
          <li>• Động lượng được bảo toàn: p = m₁v₁ + m₂v₂</li>
          <li>• Va chạm đàn hồi: Năng lượng được bảo toàn</li>
          <li>• Va chạm mềm: Năng lượng bị mất</li>
          <li>• Mũi tên: Vector vận tốc</li>
        </ul>
      </div>
    </div>
  );
}

