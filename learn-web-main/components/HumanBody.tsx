"use client";

import { useState } from "react";

interface BodySystem {
  id: string;
  name: string;
  color: string;
  description: string;
  organs: string[];
  functions: string[];
}

const bodySystems: BodySystem[] = [
  {
    id: "circulatory",
    name: "Hệ tuần hoàn",
    color: "text-red-600 bg-red-100 border-red-300",
    description: "Hệ thống vận chuyển máu và chất dinh dưỡng đi khắp cơ thể",
    organs: ["Tim", "Động mạch", "Tĩnh mạch", "Mao mạch"],
    functions: [
      "Vận chuyển oxy và chất dinh dưỡng",
      "Loại bỏ CO₂ và chất thải",
      "Điều hòa nhiệt độ cơ thể",
      "Bảo vệ cơ thể khỏi bệnh tật"
    ]
  },
  {
    id: "respiratory",
    name: "Hệ hô hấp",
    color: "text-blue-600 bg-blue-100 border-blue-300",
    description: "Hệ thống trao đổi khí giữa cơ thể và môi trường",
    organs: ["Mũi", "Khí quản", "Phế quản", "Phổi"],
    functions: [
      "Hít thở không khí",
      "Trao đổi O₂ và CO₂",
      "Điều hòa pH máu",
      "Bảo vệ đường hô hấp"
    ]
  },
  {
    id: "digestive",
    name: "Hệ tiêu hóa",
    color: "text-yellow-700 bg-yellow-100 border-yellow-300",
    description: "Hệ thống phân giải thức ăn và hấp thụ chất dinh dưỡng",
    organs: ["Miệng", "Thực quản", "Dạ dày", "Ruột non", "Ruột già"],
    functions: [
      "Tiêu hóa thức ăn",
      "Hấp thụ chất dinh dưỡng",
      "Loại bỏ chất thải",
      "Sản xuất enzyme tiêu hóa"
    ]
  },
  {
    id: "nervous",
    name: "Hệ thần kinh",
    color: "text-purple-600 bg-purple-100 border-purple-300",
    description: "Hệ thống điều khiển và phối hợp các hoạt động của cơ thể",
    organs: ["Não", "Tủy sống", "Dây thần kinh"],
    functions: [
      "Điều khiển các hoạt động cơ thể",
      "Xử lý thông tin từ giác quan",
      "Điều hòa nội tiết",
      "Tư duy và trí nhớ"
    ]
  },
  {
    id: "skeletal",
    name: "Hệ xương",
    color: "text-gray-700 bg-gray-100 border-gray-300",
    description: "Hệ thống khung xương hỗ trợ và bảo vệ cơ thể",
    organs: ["Xương sọ", "Xương sống", "Xương sườn", "Xương chi"],
    functions: [
      "Hỗ trợ cơ thể",
      "Bảo vệ các cơ quan nội tạng",
      "Tạo tế bào máu",
      "Lưu trữ khoáng chất"
    ]
  },
  {
    id: "muscular",
    name: "Hệ cơ",
    color: "text-orange-600 bg-orange-100 border-orange-300",
    description: "Hệ thống cơ giúp cơ thể vận động",
    organs: ["Cơ vân", "Cơ trơn", "Cơ tim"],
    functions: [
      "Tạo chuyển động",
      "Duy trì tư thế",
      "Sản sinh nhiệt",
      "Bảo vệ cơ quan nội tạng"
    ]
  },
  {
    id: "excretory",
    name: "Hệ bài tiết",
    color: "text-teal-600 bg-teal-100 border-teal-300",
    description: "Hệ thống loại bỏ chất thải ra khỏi cơ thể",
    organs: ["Thận", "Niệu quản", "Bàng quang", "Niệu đạo"],
    functions: [
      "Lọc máu và loại bỏ chất thải",
      "Điều hòa lượng nước trong cơ thể",
      "Cân bằng điện giải",
      "Điều hòa huyết áp"
    ]
  },
  {
    id: "endocrine",
    name: "Hệ nội tiết",
    color: "text-pink-600 bg-pink-100 border-pink-300",
    description: "Hệ thống sản xuất và tiết hormone điều hòa cơ thể",
    organs: ["Tuyến yên", "Tuyến giáp", "Tuyến tụy", "Tuyến thượng thận"],
    functions: [
      "Sản xuất hormone",
      "Điều hòa tăng trưởng",
      "Điều hòa chuyển hóa",
      "Điều hòa sinh sản"
    ]
  },
  {
    id: "immune",
    name: "Hệ miễn dịch",
    color: "text-green-600 bg-green-100 border-green-300",
    description: "Hệ thống bảo vệ cơ thể khỏi bệnh tật và nhiễm trùng",
    organs: ["Hạch bạch huyết", "Lách", "Tuyến ức", "Bạch cầu"],
    functions: [
      "Chống lại vi khuẩn và virus",
      "Sản xuất kháng thể",
      "Nhận biết và tiêu diệt tế bào lạ",
      "Ghi nhớ mầm bệnh"
    ]
  }
];

export default function HumanBody() {
  const [selectedSystem, setSelectedSystem] = useState<BodySystem | null>(null);

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-2">
          Cơ Thể Người - Các Hệ Cơ Quan
        </h2>
        <p className="text-gray-600">
          Nhấp vào hệ cơ quan để xem thông tin chi tiết
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {/* Human Body Diagram */}
        <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-8 flex items-center justify-center">
          <div className="relative">
            {/* Simple Human Body SVG */}
            <svg
              width="300"
              height="500"
              viewBox="0 0 300 500"
              className="mx-auto"
            >
              {/* Head */}
              <circle
                cx="150"
                cy="60"
                r="40"
                className={`cursor-pointer transition-all ${
                  selectedSystem?.id === "nervous"
                    ? "fill-purple-400 stroke-purple-600"
                    : "fill-gray-200 stroke-gray-400 hover:fill-purple-200"
                }`}
                strokeWidth="2"
                onClick={() => setSelectedSystem(bodySystems.find(s => s.id === "nervous") || null)}
              />
              
              {/* Torso */}
              <rect
                x="100"
                y="100"
                width="100"
                height="150"
                rx="20"
                className={`cursor-pointer transition-all ${
                  selectedSystem?.id === "circulatory" || selectedSystem?.id === "respiratory" || selectedSystem?.id === "digestive"
                    ? "fill-blue-300 stroke-blue-600"
                    : "fill-gray-200 stroke-gray-400 hover:fill-blue-200"
                }`}
                strokeWidth="2"
                onClick={() => setSelectedSystem(bodySystems.find(s => s.id === "circulatory") || null)}
              />
              
              {/* Heart */}
              <path
                d="M 150 130 L 160 140 L 150 155 L 140 140 Z"
                className={`cursor-pointer transition-all ${
                  selectedSystem?.id === "circulatory"
                    ? "fill-red-500 stroke-red-700"
                    : "fill-red-300 stroke-red-500 hover:fill-red-400"
                }`}
                strokeWidth="2"
                onClick={() => setSelectedSystem(bodySystems.find(s => s.id === "circulatory") || null)}
              />
              
              {/* Lungs */}
              <ellipse
                cx="130"
                cy="140"
                rx="15"
                ry="25"
                className={`cursor-pointer transition-all ${
                  selectedSystem?.id === "respiratory"
                    ? "fill-blue-500 stroke-blue-700"
                    : "fill-blue-200 stroke-blue-400 hover:fill-blue-300"
                }`}
                strokeWidth="2"
                onClick={() => setSelectedSystem(bodySystems.find(s => s.id === "respiratory") || null)}
              />
              <ellipse
                cx="170"
                cy="140"
                rx="15"
                ry="25"
                className={`cursor-pointer transition-all ${
                  selectedSystem?.id === "respiratory"
                    ? "fill-blue-500 stroke-blue-700"
                    : "fill-blue-200 stroke-blue-400 hover:fill-blue-300"
                }`}
                strokeWidth="2"
                onClick={() => setSelectedSystem(bodySystems.find(s => s.id === "respiratory") || null)}
              />
              
              {/* Stomach */}
              <ellipse
                cx="150"
                cy="200"
                rx="30"
                ry="20"
                className={`cursor-pointer transition-all ${
                  selectedSystem?.id === "digestive"
                    ? "fill-yellow-500 stroke-yellow-700"
                    : "fill-yellow-200 stroke-yellow-400 hover:fill-yellow-300"
                }`}
                strokeWidth="2"
                onClick={() => setSelectedSystem(bodySystems.find(s => s.id === "digestive") || null)}
              />

              {/* Kidneys (Excretory System) */}
              <ellipse
                cx="120"
                cy="210"
                rx="10"
                ry="15"
                className={`cursor-pointer transition-all ${
                  selectedSystem?.id === "excretory"
                    ? "fill-teal-500 stroke-teal-700"
                    : "fill-teal-200 stroke-teal-400 hover:fill-teal-300"
                }`}
                strokeWidth="2"
                onClick={() => setSelectedSystem(bodySystems.find(s => s.id === "excretory") || null)}
              />
              <ellipse
                cx="180"
                cy="210"
                rx="10"
                ry="15"
                className={`cursor-pointer transition-all ${
                  selectedSystem?.id === "excretory"
                    ? "fill-teal-500 stroke-teal-700"
                    : "fill-teal-200 stroke-teal-400 hover:fill-teal-300"
                }`}
                strokeWidth="2"
                onClick={() => setSelectedSystem(bodySystems.find(s => s.id === "excretory") || null)}
              />

              {/* Thyroid (Endocrine System) */}
              <rect
                x="140"
                y="95"
                width="20"
                height="10"
                rx="3"
                className={`cursor-pointer transition-all ${
                  selectedSystem?.id === "endocrine"
                    ? "fill-pink-500 stroke-pink-700"
                    : "fill-pink-200 stroke-pink-400 hover:fill-pink-300"
                }`}
                strokeWidth="2"
                onClick={() => setSelectedSystem(bodySystems.find(s => s.id === "endocrine") || null)}
              />

              {/* Lymph Nodes (Immune System) */}
              <circle
                cx="110"
                cy="120"
                r="5"
                className={`cursor-pointer transition-all ${
                  selectedSystem?.id === "immune"
                    ? "fill-green-500 stroke-green-700"
                    : "fill-green-200 stroke-green-400 hover:fill-green-300"
                }`}
                strokeWidth="2"
                onClick={() => setSelectedSystem(bodySystems.find(s => s.id === "immune") || null)}
              />
              <circle
                cx="190"
                cy="120"
                r="5"
                className={`cursor-pointer transition-all ${
                  selectedSystem?.id === "immune"
                    ? "fill-green-500 stroke-green-700"
                    : "fill-green-200 stroke-green-400 hover:fill-green-300"
                }`}
                strokeWidth="2"
                onClick={() => setSelectedSystem(bodySystems.find(s => s.id === "immune") || null)}
              />

              {/* Arms */}
              <rect
                x="50"
                y="110"
                width="40"
                height="120"
                rx="15"
                className={`cursor-pointer transition-all ${
                  selectedSystem?.id === "skeletal" || selectedSystem?.id === "muscular"
                    ? "fill-orange-300 stroke-orange-600"
                    : "fill-gray-200 stroke-gray-400 hover:fill-orange-200"
                }`}
                strokeWidth="2"
                onClick={() => setSelectedSystem(bodySystems.find(s => s.id === "muscular") || null)}
              />
              <rect
                x="210"
                y="110"
                width="40"
                height="120"
                rx="15"
                className={`cursor-pointer transition-all ${
                  selectedSystem?.id === "skeletal" || selectedSystem?.id === "muscular"
                    ? "fill-orange-300 stroke-orange-600"
                    : "fill-gray-200 stroke-gray-400 hover:fill-orange-200"
                }`}
                strokeWidth="2"
                onClick={() => setSelectedSystem(bodySystems.find(s => s.id === "muscular") || null)}
              />
              
              {/* Legs */}
              <rect
                x="110"
                y="250"
                width="35"
                height="200"
                rx="15"
                className={`cursor-pointer transition-all ${
                  selectedSystem?.id === "skeletal" || selectedSystem?.id === "muscular"
                    ? "fill-orange-300 stroke-orange-600"
                    : "fill-gray-200 stroke-gray-400 hover:fill-orange-200"
                }`}
                strokeWidth="2"
                onClick={() => setSelectedSystem(bodySystems.find(s => s.id === "skeletal") || null)}
              />
              <rect
                x="155"
                y="250"
                width="35"
                height="200"
                rx="15"
                className={`cursor-pointer transition-all ${
                  selectedSystem?.id === "skeletal" || selectedSystem?.id === "muscular"
                    ? "fill-orange-300 stroke-orange-600"
                    : "fill-gray-200 stroke-gray-400 hover:fill-orange-200"
                }`}
                strokeWidth="2"
                onClick={() => setSelectedSystem(bodySystems.find(s => s.id === "skeletal") || null)}
              />
            </svg>
          </div>
        </div>

        {/* System List */}
        <div className="space-y-3">
          <h3 className="text-xl font-bold text-gray-800 mb-4">Các hệ cơ quan:</h3>
          {bodySystems.map((system) => (
            <button
              key={system.id}
              onClick={() => setSelectedSystem(system)}
              className={`w-full text-left p-4 rounded-xl border-2 transition-all ${
                selectedSystem?.id === system.id
                  ? system.color + " shadow-lg scale-105"
                  : "bg-white border-gray-200 hover:border-gray-300 hover:shadow-md"
              }`}
            >
              <h4 className="font-bold text-lg mb-1">{system.name}</h4>
              <p className="text-sm text-gray-600">{system.description}</p>
            </button>
          ))}
        </div>
      </div>

      {/* System Details */}
      {selectedSystem && (
        <div className={`rounded-2xl p-6 border-2 ${selectedSystem.color}`}>
          <h3 className="text-2xl font-bold mb-4">{selectedSystem.name}</h3>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-bold text-lg mb-2">Cơ quan chính:</h4>
              <ul className="space-y-2">
                {selectedSystem.organs.map((organ, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-current" />
                    <span>{organ}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold text-lg mb-2">Chức năng:</h4>
              <ul className="space-y-2">
                {selectedSystem.functions.map((func, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <span className="mt-1.5 w-2 h-2 rounded-full bg-current flex-shrink-0" />
                    <span>{func}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

