import Link from "next/link";

export default function Home() {
  const subjects = [
    {
      id: "hoa",
      name: "Hóa Học",
      description: "Ôn tập kiến thức Hóa học",
      color: "from-blue-500 to-cyan-500",
      icon: "🧪",
    },
    {
      id: "ly",
      name: "Vật Lý",
      description: "Ôn tập kiến thức Vật lý",
      color: "from-purple-500 to-pink-500",
      icon: "⚡",
    },
    {
      id: "sinh",
      name: "Sinh Học",
      description: "Ôn tập kiến thức Sinh học",
      color: "from-green-500 to-emerald-500",
      icon: "🌱",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-purple-50 to-pink-100">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900">
            🎓 Phần mềm học môn khoa học tự nhiên THCS
          </h1>
          <p className="mt-2 text-gray-700">
            Ôn tập và kiểm tra kiến thức Lý - Hóa - Sinh
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Chọn phân môn để bắt đầu
          </h2>
          <p className="text-lg text-gray-700">
            Làm bài tập trắc nghiệm và kiểm tra kiến thức của bạn
          </p>
        </div>

        {/* Subject Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {subjects.map((subject) => (
            <Link
              key={subject.id}
              href={`/${subject.id}`}
              className="group"
            >
              <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden">
                <div
                  className={`h-32 bg-gradient-to-r ${subject.color} flex items-center justify-center`}
                >
                  <span className="text-6xl">{subject.icon}</span>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {subject.name}
                  </h3>
                  <p className="text-gray-700 mb-4">{subject.description}</p>
                  <div className="flex items-center text-indigo-600 font-semibold group-hover:text-indigo-700">
                    Bắt đầu học
                    <svg
                      className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Features */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-xl p-6 shadow-md">
            <div className="text-3xl mb-3">📝</div>
            <h3 className="font-bold text-lg mb-2 text-gray-900">Câu hỏi trắc nghiệm</h3>
            <p className="text-gray-700 text-sm">
              Hệ thống câu hỏi đa dạng theo từng chương
            </p>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-md">
            <div className="text-3xl mb-3">✅</div>
            <h3 className="font-bold text-lg mb-2 text-gray-900">Giải thích chi tiết</h3>
            <p className="text-gray-700 text-sm">
              Đáp án kèm lời giải giúp hiểu sâu kiến thức
            </p>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-md">
            <div className="text-3xl mb-3">📊</div>
            <h3 className="font-bold text-lg mb-2 text-gray-900">Theo dõi tiến độ</h3>
            <p className="text-gray-700 text-sm">
              Xem kết quả và điểm số sau mỗi bài
            </p>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="mt-16 bg-white border-t">
        <div className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
          <p className="text-center text-gray-600 text-sm">
            © 2026 Dự án Tin Học Trẻ - Web Học Tập Khoa Học Tự Nhiên
          </p>
        </div>
      </footer>
    </div>
  );
}

