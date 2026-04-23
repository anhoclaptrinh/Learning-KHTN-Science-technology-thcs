"use client";

import { useState, useEffect, useRef } from "react";
import { ProjectileSimulation, CollisionSimulation } from "./PhysicsSimulationExtra";

type SimulationType = "reflection" | "pendulum" | "pressure" | "force" | "projectile" | "collision";

export default function PhysicsSimulation() {
  const [activeSimulation, setActiveSimulation] = useState<SimulationType>("reflection");
  
  return (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-2">
          Mô Phỏng Thí Nghiệm Vật Lý
        </h2>
        <p className="text-gray-600">
          Chọn thí nghiệm để xem mô phỏng tương tác
        </p>
      </div>

      {/* Simulation Tabs */}
      <div className="flex flex-wrap gap-3 justify-center">
        <button
          onClick={() => setActiveSimulation("reflection")}
          className={`px-4 py-2 rounded-xl font-semibold transition-all text-sm ${
            activeSimulation === "reflection"
              ? "bg-purple-500 text-white shadow-lg"
              : "bg-white text-gray-700 border-2 border-gray-200 hover:border-purple-300"
          }`}
        >
          🔦 Phản Xạ
        </button>
        <button
          onClick={() => setActiveSimulation("pendulum")}
          className={`px-4 py-2 rounded-xl font-semibold transition-all text-sm ${
            activeSimulation === "pendulum"
              ? "bg-purple-500 text-white shadow-lg"
              : "bg-white text-gray-700 border-2 border-gray-200 hover:border-purple-300"
          }`}
        >
          ⚖️ Con Lắc
        </button>
        <button
          onClick={() => setActiveSimulation("pressure")}
          className={`px-4 py-2 rounded-xl font-semibold transition-all text-sm ${
            activeSimulation === "pressure"
              ? "bg-purple-500 text-white shadow-lg"
              : "bg-white text-gray-700 border-2 border-gray-200 hover:border-purple-300"
          }`}
        >
          💧 Áp Suất
        </button>
        <button
          onClick={() => setActiveSimulation("force")}
          className={`px-4 py-2 rounded-xl font-semibold transition-all text-sm ${
            activeSimulation === "force"
              ? "bg-purple-500 text-white shadow-lg"
              : "bg-white text-gray-700 border-2 border-gray-200 hover:border-purple-300"
          }`}
        >
          💪 Lực & Gia Tốc
        </button>
        <button
          onClick={() => setActiveSimulation("projectile")}
          className={`px-4 py-2 rounded-xl font-semibold transition-all text-sm ${
            activeSimulation === "projectile"
              ? "bg-purple-500 text-white shadow-lg"
              : "bg-white text-gray-700 border-2 border-gray-200 hover:border-purple-300"
          }`}
        >
          🎯 Chuyển Động Ném
        </button>
        <button
          onClick={() => setActiveSimulation("collision")}
          className={`px-4 py-2 rounded-xl font-semibold transition-all text-sm ${
            activeSimulation === "collision"
              ? "bg-purple-500 text-white shadow-lg"
              : "bg-white text-gray-700 border-2 border-gray-200 hover:border-purple-300"
          }`}
        >
          💥 Va Chạm
        </button>
      </div>

      {/* Simulation Content */}
      <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-8">
        {activeSimulation === "reflection" && <ReflectionSimulation />}
        {activeSimulation === "pendulum" && <PendulumSimulation />}
        {activeSimulation === "pressure" && <PressureSimulation />}
        {activeSimulation === "force" && <ForceSimulation />}
        {activeSimulation === "projectile" && <ProjectileSimulation />}
        {activeSimulation === "collision" && <CollisionSimulation />}
      </div>
    </div>
  );
}

// Reflection Simulation
function ReflectionSimulation() {
  const [angle, setAngle] = useState(30);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Draw mirror (vertical line)
    ctx.strokeStyle = "#6B7280";
    ctx.lineWidth = 4;
    ctx.beginPath();
    ctx.moveTo(300, 50);
    ctx.lineTo(300, 350);
    ctx.stroke();

    // Draw normal line (dashed)
    ctx.setLineDash([5, 5]);
    ctx.strokeStyle = "#9CA3AF";
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(200, 200);
    ctx.lineTo(400, 200);
    ctx.stroke();
    ctx.setLineDash([]);

    // Calculate incident ray
    const angleRad = (angle * Math.PI) / 180;
    const rayLength = 150;
    const incidentX = 300 - rayLength * Math.cos(angleRad);
    const incidentY = 200 - rayLength * Math.sin(angleRad);

    // Draw incident ray
    ctx.strokeStyle = "#EF4444";
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.moveTo(incidentX, incidentY);
    ctx.lineTo(300, 200);
    ctx.stroke();

    // Draw arrow for incident ray
    ctx.fillStyle = "#EF4444";
    ctx.beginPath();
    ctx.moveTo(300, 200);
    ctx.lineTo(300 - 10, 200 - 5);
    ctx.lineTo(300 - 10, 200 + 5);
    ctx.fill();

    // Calculate reflected ray
    const reflectedX = 300 + rayLength * Math.cos(angleRad);
    const reflectedY = 200 - rayLength * Math.sin(angleRad);

    // Draw reflected ray
    ctx.strokeStyle = "#3B82F6";
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.moveTo(300, 200);
    ctx.lineTo(reflectedX, reflectedY);
    ctx.stroke();

    // Draw arrow for reflected ray
    ctx.fillStyle = "#3B82F6";
    ctx.beginPath();
    ctx.moveTo(reflectedX, reflectedY);
    ctx.lineTo(reflectedX - 10 * Math.cos(angleRad + Math.PI / 6), reflectedY + 10 * Math.sin(angleRad + Math.PI / 6));
    ctx.lineTo(reflectedX - 10 * Math.cos(angleRad - Math.PI / 6), reflectedY + 10 * Math.sin(angleRad - Math.PI / 6));
    ctx.fill();

    // Draw angle arcs
    ctx.strokeStyle = "#EF4444";
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.arc(300, 200, 50, Math.PI - angleRad, Math.PI, false);
    ctx.stroke();

    ctx.strokeStyle = "#3B82F6";
    ctx.beginPath();
    ctx.arc(300, 200, 50, 0, angleRad, false);
    ctx.stroke();

    // Labels
    ctx.fillStyle = "#1F2937";
    ctx.font = "14px Arial";
    ctx.fillText(`i = ${angle}°`, 220, 180);
    ctx.fillText(`i' = ${angle}°`, 320, 180);
  }, [angle]);

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h3 className="text-2xl font-bold text-gray-800 mb-2">Định Luật Phản Xạ Ánh Sáng</h3>
        <p className="text-gray-600">Góc tới (i) = Góc phản xạ (i')</p>
      </div>

      <div className="bg-white rounded-xl p-6 flex justify-center">
        <canvas ref={canvasRef} width={600} height={400} className="border-2 border-gray-200 rounded-lg" />
      </div>

      <div className="bg-white rounded-xl p-6">
        <label className="block text-gray-700 font-semibold mb-3">
          Điều chỉnh góc tới: {angle}°
        </label>
        <input
          type="range"
          min="10"
          max="80"
          value={angle}
          onChange={(e) => setAngle(Number(e.target.value))}
          className="w-full h-3 bg-gray-200 rounded-lg appearance-none cursor-pointer"
        />
        <div className="flex justify-between text-sm text-gray-500 mt-2">
          <span>10°</span>
          <span>80°</span>
        </div>
      </div>

      <div className="bg-purple-50 border-2 border-purple-200 rounded-xl p-4">
        <h4 className="font-bold text-purple-900 mb-2">💡 Giải thích:</h4>
        <ul className="space-y-1 text-purple-800">
          <li>• Tia màu đỏ: Tia tới</li>
          <li>• Tia màu xanh: Tia phản xạ</li>
          <li>• Đường nét đứt: Pháp tuyến</li>
          <li>• Góc tới luôn bằng góc phản xạ</li>
        </ul>
      </div>
    </div>
  );
}

// Pendulum Simulation
function PendulumSimulation() {
  const [isRunning, setIsRunning] = useState(false);
  const [angle, setAngle] = useState(30);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number | undefined>(undefined);
  const timeRef = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const centerX = 300;
      const centerY = 50;
      const length = 200;

      // Calculate pendulum position
      let currentAngle = angle;
      if (isRunning) {
        currentAngle = angle * Math.cos(timeRef.current * 0.05);
        timeRef.current += 1;
      }

      const angleRad = (currentAngle * Math.PI) / 180;
      const bobX = centerX + length * Math.sin(angleRad);
      const bobY = centerY + length * Math.cos(angleRad);

      // Draw string
      ctx.strokeStyle = "#6B7280";
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(centerX, centerY);
      ctx.lineTo(bobX, bobY);
      ctx.stroke();

      // Draw pivot
      ctx.fillStyle = "#374151";
      ctx.beginPath();
      ctx.arc(centerX, centerY, 8, 0, 2 * Math.PI);
      ctx.fill();

      // Draw bob
      ctx.fillStyle = "#EF4444";
      ctx.beginPath();
      ctx.arc(bobX, bobY, 20, 0, 2 * Math.PI);
      ctx.fill();

      // Draw arc showing amplitude
      ctx.strokeStyle = "#9CA3AF";
      ctx.setLineDash([5, 5]);
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.arc(centerX, centerY, length, Math.PI / 2 - (angle * Math.PI) / 180, Math.PI / 2 + (angle * Math.PI) / 180);
      ctx.stroke();
      ctx.setLineDash([]);

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
  }, [isRunning, angle]);

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h3 className="text-2xl font-bold text-gray-800 mb-2">Con Lắc Đơn</h3>
        <p className="text-gray-600">Dao động điều hòa</p>
      </div>

      <div className="bg-white rounded-xl p-6 flex justify-center">
        <canvas ref={canvasRef} width={600} height={350} className="border-2 border-gray-200 rounded-lg" />
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        <div className="bg-white rounded-xl p-6">
          <label className="block text-gray-700 font-semibold mb-3">
            Biên độ góc: {angle}°
          </label>
          <input
            type="range"
            min="10"
            max="45"
            value={angle}
            onChange={(e) => {
              setAngle(Number(e.target.value));
              setIsRunning(false);
              timeRef.current = 0;
            }}
            className="w-full h-3 bg-gray-200 rounded-lg appearance-none cursor-pointer"
            disabled={isRunning}
          />
        </div>

        <div className="bg-white rounded-xl p-6 flex items-center justify-center">
          <button
            onClick={() => {
              setIsRunning(!isRunning);
              if (!isRunning) timeRef.current = 0;
            }}
            className={`px-8 py-3 rounded-xl font-bold text-white transition-all ${
              isRunning
                ? "bg-red-500 hover:bg-red-600"
                : "bg-green-500 hover:bg-green-600"
            }`}
          >
            {isRunning ? "⏸ Dừng" : "▶ Chạy"}
          </button>
        </div>
      </div>

      <div className="bg-purple-50 border-2 border-purple-200 rounded-xl p-4">
        <h4 className="font-bold text-purple-900 mb-2">💡 Giải thích:</h4>
        <ul className="space-y-1 text-purple-800">
          <li>• Con lắc dao động qua lại quanh vị trí cân bằng</li>
          <li>• Biên độ: Góc lệch lớn nhất so với phương thẳng đứng</li>
          <li>• Chu kỳ dao động phụ thuộc vào chiều dài dây</li>
        </ul>
      </div>
    </div>
  );
}

// Pressure Simulation
function PressureSimulation() {
  const [depth, setDepth] = useState(5);

  const pressure = (depth * 10000).toFixed(0); // P = ρgh (simplified)

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h3 className="text-2xl font-bold text-gray-800 mb-2">Áp Suất Chất Lỏng</h3>
        <p className="text-gray-600">Áp suất tăng theo độ sâu</p>
      </div>

      <div className="bg-white rounded-xl p-6">
        <div className="relative h-96 bg-gradient-to-b from-blue-200 to-blue-600 rounded-lg overflow-hidden">
          {/* Water surface */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-blue-800" />
          
          {/* Depth indicator */}
          <div
            className="absolute left-1/2 transform -translate-x-1/2 transition-all duration-300"
            style={{ top: `${(depth / 10) * 100}%` }}
          >
            <div className="relative">
              <div className="w-16 h-16 bg-yellow-400 rounded-full border-4 border-yellow-600 flex items-center justify-center">
                <span className="text-2xl">🤿</span>
              </div>
              <div className="absolute left-20 top-1/2 transform -translate-y-1/2 bg-white px-4 py-2 rounded-lg shadow-lg whitespace-nowrap">
                <p className="font-bold text-gray-800">Độ sâu: {depth}m</p>
                <p className="text-sm text-gray-600">Áp suất: {pressure} Pa</p>
              </div>
            </div>
          </div>

          {/* Depth markers */}
          {[0, 2, 4, 6, 8, 10].map((d) => (
            <div
              key={d}
              className="absolute left-4 text-white font-semibold"
              style={{ top: `${(d / 10) * 100}%` }}
            >
              {d}m
            </div>
          ))}
        </div>
      </div>

      <div className="bg-white rounded-xl p-6">
        <label className="block text-gray-700 font-semibold mb-3">
          Điều chỉnh độ sâu: {depth}m
        </label>
        <input
          type="range"
          min="0"
          max="10"
          step="0.5"
          value={depth}
          onChange={(e) => setDepth(Number(e.target.value))}
          className="w-full h-3 bg-gray-200 rounded-lg appearance-none cursor-pointer"
        />
        <div className="flex justify-between text-sm text-gray-500 mt-2">
          <span>0m (Mặt nước)</span>
          <span>10m (Đáy)</span>
        </div>
      </div>

      <div className="bg-purple-50 border-2 border-purple-200 rounded-xl p-4">
        <h4 className="font-bold text-purple-900 mb-2">💡 Công thức:</h4>
        <div className="text-purple-800 space-y-2">
          <p className="font-mono bg-white px-3 py-2 rounded">P = ρ × g × h</p>
          <ul className="space-y-1 text-sm">
            <li>• P: Áp suất (Pa)</li>
            <li>• ρ: Khối lượng riêng của nước (1000 kg/m³)</li>
            <li>• g: Gia tốc trọng trường (10 m/s²)</li>
            <li>• h: Độ sâu (m)</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

// Force Simulation (F = ma)
function ForceSimulation() {
  const [force, setForce] = useState(50);
  const [mass, setMass] = useState(10);
  const [isRunning, setIsRunning] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number | undefined>(undefined);
  const positionRef = useRef(50);
  const velocityRef = useRef(0);

  const acceleration = force / mass;

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
      ctx.moveTo(0, 300);
      ctx.lineTo(600, 300);
      ctx.stroke();

      // Update physics
      if (isRunning) {
        velocityRef.current += acceleration * 0.1;
        positionRef.current += velocityRef.current * 0.1;

        // Boundary check
        if (positionRef.current > 550) {
          positionRef.current = 550;
          velocityRef.current = 0;
        }
        if (positionRef.current < 50) {
          positionRef.current = 50;
          velocityRef.current = 0;
        }
      }

      // Draw box
      const boxSize = Math.sqrt(mass) * 10;
      ctx.fillStyle = "#3B82F6";
      ctx.fillRect(positionRef.current - boxSize / 2, 300 - boxSize, boxSize, boxSize);

      // Draw force arrow
      if (force !== 0) {
        const arrowLength = Math.abs(force) * 2;
        const arrowX = force > 0 ? positionRef.current + boxSize / 2 : positionRef.current - boxSize / 2;

        ctx.strokeStyle = "#EF4444";
        ctx.lineWidth = 3;
        ctx.beginPath();
        ctx.moveTo(arrowX, 300 - boxSize / 2);
        ctx.lineTo(arrowX + (force > 0 ? arrowLength : -arrowLength), 300 - boxSize / 2);
        ctx.stroke();

        // Arrow head
        ctx.fillStyle = "#EF4444";
        ctx.beginPath();
        if (force > 0) {
          ctx.moveTo(arrowX + arrowLength, 300 - boxSize / 2);
          ctx.lineTo(arrowX + arrowLength - 10, 300 - boxSize / 2 - 5);
          ctx.lineTo(arrowX + arrowLength - 10, 300 - boxSize / 2 + 5);
        } else {
          ctx.moveTo(arrowX - arrowLength, 300 - boxSize / 2);
          ctx.lineTo(arrowX - arrowLength + 10, 300 - boxSize / 2 - 5);
          ctx.lineTo(arrowX - arrowLength + 10, 300 - boxSize / 2 + 5);
        }
        ctx.fill();
      }

      // Display info
      ctx.fillStyle = "#1F2937";
      ctx.font = "16px Arial";
      ctx.fillText(`v = ${velocityRef.current.toFixed(1)} m/s`, 10, 30);
      ctx.fillText(`a = ${acceleration.toFixed(1)} m/s²`, 10, 55);

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
  }, [isRunning, force, mass, acceleration]);

  const handleReset = () => {
    setIsRunning(false);
    positionRef.current = 50;
    velocityRef.current = 0;
  };

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h3 className="text-2xl font-bold text-gray-800 mb-2">Lực và Gia Tốc</h3>
        <p className="text-gray-600">F = m × a</p>
      </div>

      <div className="bg-white rounded-xl p-6 flex justify-center">
        <canvas ref={canvasRef} width={600} height={350} className="border-2 border-gray-200 rounded-lg" />
      </div>

      <div className="grid md:grid-cols-3 gap-4">
        <div className="bg-white rounded-xl p-6">
          <label className="block text-gray-700 font-semibold mb-3">
            Lực (F): {force} N
          </label>
          <input
            type="range"
            min="-100"
            max="100"
            value={force}
            onChange={(e) => setForce(Number(e.target.value))}
            className="w-full h-3 bg-gray-200 rounded-lg appearance-none cursor-pointer"
            disabled={isRunning}
          />
        </div>

        <div className="bg-white rounded-xl p-6">
          <label className="block text-gray-700 font-semibold mb-3">
            Khối lượng (m): {mass} kg
          </label>
          <input
            type="range"
            min="5"
            max="50"
            value={mass}
            onChange={(e) => setMass(Number(e.target.value))}
            className="w-full h-3 bg-gray-200 rounded-lg appearance-none cursor-pointer"
            disabled={isRunning}
          />
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
          <li>• Lực càng lớn, gia tốc càng lớn</li>
          <li>• Khối lượng càng lớn, gia tốc càng nhỏ</li>
          <li>• Mũi tên đỏ: Lực tác dụng</li>
          <li>• Hộp xanh: Vật chuyển động</li>
        </ul>
      </div>
    </div>
  );
}

