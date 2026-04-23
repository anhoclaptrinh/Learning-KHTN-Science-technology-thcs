[![Next.js](https://img.shields.io/badge/Next.js-15.1.8-black)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-38bdf8)](https://tailwindcss.com/)
[![License](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)

> Ứng dụng web tương tác hỗ trợ học sinh THCS ôn tập và kiểm tra kiến thức môn Hóa học, Vật lý và Sinh học.

## ✨ Tính năng nổi bật

### 🧪 Hóa học
- **Bảng tuần hoàn tương tác** với **118 nguyên tố** theo chuẩn IUPAC
- Thông tin chi tiết: Số hiệu, khối lượng, cấu hình electron
- 10 loại phân loại với màu sắc riêng biệt
- Lanthanide và Actinide series
- **15 câu hỏi trắc nghiệm** phân theo lớp 6, 7, 8

### ⚡ Vật lý
- **6 mô phỏng thí nghiệm** tương tác:
  - Phản xạ ánh sáng
  - Con lắc đơn
  - Áp suất chất lỏng
  - Lực và Gia tốc (F = ma)
  - Chuyển động ném xiên
  - Va chạm đàn hồi
- **15 câu hỏi trắc nghiệm** phân theo lớp 6, 7, 8

### 🌱 Sinh học
- **Sơ đồ cơ thể người** với **9 hệ cơ quan**:
  - Hệ tuần hoàn, hô hấp, tiêu hóa
  - Hệ thần kinh, xương, cơ
  - Hệ bài tiết, nội tiết, miễn dịch
- Thông tin chi tiết về chức năng mỗi hệ
- **15 câu hỏi trắc nghiệm** phân theo lớp 6, 7, 8

### ✏️ Hệ thống trắc nghiệm
- **45 câu hỏi** tổng cộng (15 câu/môn)
- Phân tầng theo lớp 6, 7, 8 (5 câu/lớp)
- Lời giải chi tiết cho từng câu
- Chấm điểm và thống kê tức thì

## 🛠️ Công nghệ sử dụng

- **Framework**: Next.js 15.1.8 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Runtime**: Node.js
- **Package Manager**: npm

## 📦 Cài đặt

### Yêu cầu hệ thống
- Node.js 18.x trở lên
- npm 9.x trở lên

### Các bước cài đặt

1. **Clone hoặc tải dự án**
```bash
git clone https://github.com/sunniie/learn-web.git
cd learn-web
```

2. **Cài đặt dependencies**
```bash
npm install
```

3. **Chạy development server**
```bash
npm run dev
```

4. **Mở trình duyệt**
Truy cập: `http://localhost:3000`

## 📂 Cấu trúc dự án

```
learn-web/
├── app/                    # Next.js App Router
│   ├── page.tsx           # Trang chủ
│   ├── hoa/               # Môn Hóa học
│   │   └── page.tsx
│   ├── ly/                # Môn Vật lý
│   │   └── page.tsx
│   ├── sinh/              # Môn Sinh học
│   │   └── page.tsx
│   ├── layout.tsx         # Layout chung
│   └── globals.css        # CSS toàn cục
├── components/            # React Components
│   ├── QuizComponent.tsx  # Component làm bài tập
│   ├── PeriodicTable.tsx  # Bảng tuần hoàn
│   ├── HumanBody.tsx      # Cơ thể người
│   └── PhysicsSimulation.tsx # Mô phỏng vật lý
├── data/                  # Dữ liệu JSON
│   ├── hoa.json          # Câu hỏi Hóa học
│   ├── ly.json           # Câu hỏi Vật lý
│   └── sinh.json         # Câu hỏi Sinh học
├── types/                 # TypeScript types
│   └── question.ts
└── public/               # Static files

```

## 🎯 Hướng dẫn sử dụng

### Trang chủ
- Chọn một trong 3 môn học: Hóa, Lý, Sinh
- Mỗi môn có icon và màu sắc riêng biệt

### Môn Hóa học
1. **Tab Bảng Tuần Hoàn**:
   - Nhấp vào nguyên tố để xem thông tin
   - Xem chú thích màu sắc ở dưới bảng
2. **Tab Làm Bài Tập**:
   - Đọc câu hỏi và chọn đáp án
   - Nhấn "Kiểm tra đáp án"
   - Đọc giải thích và tiếp tục

### Môn Vật lý
1. **Tab Mô Phỏng Thí Nghiệm**:
   - Chọn thí nghiệm muốn xem
   - Điều chỉnh các thông số (góc, biên độ, độ sâu)
   - Quan sát kết quả trực quan
2. **Tab Làm Bài Tập**: Tương tự Hóa học

### Môn Sinh học
1. **Tab Cơ Thể Người**:
   - Nhấp vào các phần trên sơ đồ cơ thể
   - Hoặc chọn hệ cơ quan từ danh sách bên phải
   - Xem thông tin chi tiết về cơ quan và chức năng
2. **Tab Làm Bài Tập**: Tương tự Hóa học

## 📝 Thêm nội dung mới

### Thêm câu hỏi

Chỉnh sửa file JSON trong thư mục `data/`:

```json
{
  "id": 4,
  "chapter": "Chương mới",
  "question": "Câu hỏi của bạn?",
  "type": "multiple_choice",
  "options": [
    "Đáp án A",
    "Đáp án B",
    "Đáp án C",
    "Đáp án D"
  ],
  "correctAnswer": 0,
  "explanation": "Giải thích đáp án đúng",
  "difficulty": "easy",
  "points": 10
}
```

### Thêm nguyên tố vào Bảng Tuần Hoàn

Chỉnh sửa file `components/PeriodicTable.tsx`:

```typescript
{
  symbol: "K",
  name: "Kali",
  atomicNumber: 19,
  atomicMass: 39.10,
  category: "alkali-metal",
  electronConfig: "[Ar] 4s¹",
  period: 4,
  group: 1,
  position: { row: 4, col: 1 }
}
```

## 🚀 Build và Deploy

### Build production
```bash
npm run build
```

### Chạy production server
```bash
npm start
```

### Export static site (nếu cần)
```bash
npm run build
# Sau đó copy thư mục .next/static
```

## 🎨 Tùy chỉnh giao diện

### Thay đổi màu sắc
Chỉnh sửa file `tailwind.config.ts` hoặc các class trong components

### Thay đổi font chữ
Chỉnh sửa file `app/layout.tsx`

## 📊 Thống kê dự án

- **Số trang:** 4 (Home, Hóa, Lý, Sinh)
- **Số components:** 12
- **Số nguyên tố:** 118 (Bảng tuần hoàn)
- **Số mô phỏng:** 6 (Vật lý)
- **Số hệ cơ quan:** 9 (Sinh học)
- **Số câu hỏi:** 45 (15/môn, 5/lớp)
- **Lighthouse Score:** 95/100

## 🎯 Roadmap

### Đã hoàn thành ✅
- [x] Bảng tuần hoàn 118 nguyên tố
- [x] 6 mô phỏng Vật lý
- [x] 9 hệ cơ quan Sinh học
- [x] 45 câu hỏi trắc nghiệm
- [x] Hệ thống chọn lớp 6, 7, 8
- [x] Responsive design

### Đang phát triển 🚧
- [ ] Thêm 100+ câu hỏi mới
- [ ] Tính năng lưu lịch sử (localStorage)
- [ ] Dark mode
- [ ] Export kết quả PDF

### Kế hoạch tương lai 📅
- [ ] Hệ thống tài khoản
- [ ] Thêm môn Toán, Tiếng Anh
- [ ] Mobile app (React Native)
- [ ] AI Chatbot hỗ trợ

## 🐛 Xử lý lỗi

### Lỗi "Module not found"
```bash
npm install
```

### Lỗi port 3000 đã được sử dụng
```bash
# Thay đổi port trong package.json
"dev": "next dev -p 3001"
```

### Lỗi build
```bash
# Xóa cache và build lại
rm -rf .next
npm run build
```

## 📚 Tài liệu tham khảo

- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://react.dev)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [TypeScript](https://www.typescriptlang.org/docs)

## 🤝 Đóng góp

Mọi đóng góp đều được chào đón! Vui lòng:

1. Fork repository
2. Tạo branch mới (`git checkout -b feature/AmazingFeature`)
3. Commit changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to branch (`git push origin feature/AmazingFeature`)
5. Mở Pull Request

## 📄 License

Dự án này được phát triển cho mục đích giáo dục và nghiên cứu khoa học.

## 👨‍💻 Tác giả

**Nguyễn Bảo Thiên Ân**
- Email: anffne1@gmail.com

## 🙏 Lời cảm ơn

- Bộ Giáo dục và Đào tạo - Chương trình SGK
- IUPAC - Bảng tuần hoàn chuẩn quốc tế
- PhET Simulations - Cảm hứng về mô phỏng
- Cộng đồng Next.js và React

---

**⭐ Nếu dự án hữu ích, hãy cho một star nhé! ⭐**

---

*Dự án Tin Học Trẻ 2026 - Ứng dụng Web hỗ trợ học tập THCS*

