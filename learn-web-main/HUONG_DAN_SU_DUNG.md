# 📚 HƯỚNG DẪN SỬ DỤNG - WEB HỌC TẬP LỚP 8

## 📖 Giới thiệu

Web Học Tập Lớp 8 là ứng dụng web tương tác hỗ trợ học sinh lớp 6, 7, 8 ôn tập và kiểm tra kiến thức môn Hóa học, Vật lý và Sinh học. Ứng dụng cung cấp:

- 🧪 **Bảng tuần hoàn hóa học** tương tác với 118 nguyên tố
- ⚡ **Mô phỏng thí nghiệm vật lý** (6 loại mô phỏng)
- 🌱 **Sơ đồ cơ thể người** với 9 hệ cơ quan
- ✏️ **Trắc nghiệm** với 45 câu hỏi (15 câu/môn, 5 câu/lớp)

---

## 💻 Yêu cầu hệ thống

### Phần cứng tối thiểu:
- **CPU:** Intel Core i3 hoặc tương đương
- **RAM:** 4GB trở lên
- **Ổ cứng:** 500MB dung lượng trống
- **Màn hình:** Độ phân giải tối thiểu 1366x768

### Phần mềm:
- **Hệ điều hành:** Windows 10/11, macOS 10.15+, hoặc Linux
- **Node.js:** Phiên bản 18.17.0 trở lên ([Tải tại đây](https://nodejs.org/))
- **Trình duyệt:** Chrome, Firefox, Edge, hoặc Safari (phiên bản mới nhất)
- **Git:** (Tùy chọn) Để clone repository

---

## 🚀 Hướng dẫn cài đặt

### Bước 1: Cài đặt Node.js

1. Truy cập [https://nodejs.org/](https://nodejs.org/)
2. Tải phiên bản **LTS** (Long Term Support)
3. Chạy file cài đặt và làm theo hướng dẫn
4. Kiểm tra cài đặt thành công:

```bash
node --version
npm --version
```

Kết quả mong đợi:
```
v18.17.0 (hoặc cao hơn)
9.6.7 (hoặc cao hơn)
```

### Bước 2: Tải mã nguồn

#### Cách 1: Tải file ZIP
1. Truy cập repository GitHub
2. Click nút **Code** → **Download ZIP**
3. Giải nén file ZIP vào thư mục mong muốn

### Bước 3: Cài đặt dependencies

Mở **Terminal** (macOS/Linux) hoặc **Command Prompt** (Windows) tại thư mục dự án:

```bash
npm install
```

Quá trình này sẽ mất 2-5 phút tùy vào tốc độ mạng.

### Bước 4: Chạy ứng dụng

```bash
npm run dev
```

Kết quả hiển thị:
```
▲ Next.js 15.1.8 (Turbopack)
- Local:        http://localhost:3000
- Network:      http://192.168.x.x:3000

✓ Ready in 1.8s
```

### Bước 5: Truy cập ứng dụng

Mở trình duyệt và truy cập: **http://localhost:3000**

---

## 📱 Hướng dẫn sử dụng

### 1. Trang chủ

Khi vào ứng dụng, bạn sẽ thấy 3 thẻ môn học:
- 🧪 **Hóa Học** - Màu xanh dương
- ⚡ **Vật Lý** - Màu tím
- 🌱 **Sinh Học** - Màu xanh lá

Click vào môn học bạn muốn học.

### 2. Môn Hóa học

#### Tab "Bảng Tuần Hoàn"
- Hiển thị **118 nguyên tố** theo chuẩn IUPAC
- **Click vào nguyên tố** để xem thông tin chi tiết:
  - Số hiệu nguyên tử
  - Khối lượng nguyên tử
  - Cấu hình electron
  - Chu kỳ và nhóm
  - Phân loại (kim loại, phi kim, khí hiếm...)

#### Tab "Làm Bài Tập"
1. **Chọn lớp:** Click nút lớp 6, 7, hoặc 8
2. **Làm bài:** Đọc câu hỏi và chọn đáp án A, B, C, hoặc D
3. **Kiểm tra:** Click "Kiểm tra đáp án" để xem kết quả
4. **Xem giải thích:** Sau khi kiểm tra, đọc lời giải chi tiết
5. **Câu tiếp theo:** Click "Câu tiếp theo" để làm tiếp
6. **Kết quả:** Sau 5 câu, xem điểm số và tỷ lệ chính xác

### 3. Môn Vật lý

#### Tab "Mô Phỏng Thí Nghiệm"

**6 loại mô phỏng:**

1. **Phản xạ ánh sáng**
   - Điều chỉnh góc tới bằng thanh trượt
   - Quan sát góc phản xạ thay đổi
   - Định luật: Góc tới = Góc phản xạ

2. **Con lắc đơn**
   - Điều chỉnh chiều dài dây (0.5m - 2m)
   - Click "Bắt đầu" để xem dao động
   - Quan sát chu kỳ thay đổi theo chiều dài

3. **Áp suất chất lỏng**
   - Điều chỉnh độ sâu (0-10m)
   - Quan sát áp suất tăng theo độ sâu
   - Công thức: P = ρgh

4. **Lực và Gia tốc (F = ma)**
   - Điều chỉnh lực (-100N đến +100N)
   - Điều chỉnh khối lượng (5kg - 50kg)
   - Click "Play" để xem vật chuyển động
   - Quan sát vận tốc và gia tốc

5. **Chuyển động ném xiên**
   - Điều chỉnh góc ném (0° - 90°)
   - Điều chỉnh vận tốc ban đầu (5-30 m/s)
   - Click "Ném" để xem quỹ đạo
   - Quan sát tầm xa thay đổi

6. **Va chạm đàn hồi**
   - Điều chỉnh khối lượng 2 vật
   - Điều chỉnh vận tốc ban đầu
   - Click "Bắt đầu" để xem va chạm
   - Quan sát bảo toàn động lượng

#### Tab "Làm Bài Tập"
- Tương tự môn Hóa học
- Chọn lớp 6, 7, hoặc 8
- Làm 5 câu hỏi về Vật lý

### 4. Môn Sinh học

#### Tab "Cơ Thể Người"
- Hiển thị sơ đồ cơ thể người
- **Click vào hệ cơ quan** để xem chi tiết:
  - Hệ tuần hoàn
  - Hệ hô hấp
  - Hệ tiêu hóa
  - Hệ thần kinh
  - Hệ xương
  - Hệ cơ
  - Hệ bài tiết
  - Hệ nội tiết
  - Hệ miễn dịch

#### Tab "Làm Bài Tập"
- Chọn lớp 6, 7, hoặc 8
- Làm 5 câu hỏi về Sinh học

---

## 🎯 Mẹo sử dụng hiệu quả

### Cho học sinh:
1. **Học theo lớp:** Bắt đầu từ lớp 6 để nắm vững kiến thức cơ bản
2. **Làm lại nhiều lần:** Mỗi lần làm sẽ hiểu sâu hơn nhờ lời giải chi tiết
3. **Khám phá mô phỏng:** Thử thay đổi các thông số để hiểu bản chất hiện tượng
4. **Ghi chú:** Viết ra những điều mới học được từ lời giải

### Cho giáo viên:
1. **Dùng trong lớp:** Chiếu lên màn hình để giảng bài
2. **Bài tập về nhà:** Yêu cầu học sinh làm bài và chụp kết quả
3. **Kiểm tra nhanh:** Dùng phần trắc nghiệm để kiểm tra 15 phút
4. **Thí nghiệm ảo:** Dùng mô phỏng khi không có thiết bị thật

---

## ❓ Xử lý sự cố

### Lỗi: "npm: command not found"
**Nguyên nhân:** Chưa cài đặt Node.js hoặc chưa thêm vào PATH

**Giải pháp:**
1. Cài đặt lại Node.js
2. Khởi động lại Terminal/Command Prompt
3. Kiểm tra lại: `node --version`

### Lỗi: "Port 3000 already in use"
**Nguyên nhân:** Cổng 3000 đang được sử dụng bởi ứng dụng khác

**Giải pháp:**
```bash
# Dừng ứng dụng đang chạy (Ctrl+C)
# Chạy lại với cổng khác
npm run dev -- -p 3001
```

### Lỗi: "Module not found"
**Nguyên nhân:** Dependencies chưa được cài đặt đầy đủ

**Giải pháp:**
```bash
# Xóa node_modules và cài lại
rm -rf node_modules package-lock.json
npm install
```

### Trang web không tải
**Giải pháp:**
1. Kiểm tra Terminal có báo lỗi không
2. Thử trình duyệt khác
3. Xóa cache trình duyệt (Ctrl+Shift+Delete)
4. Khởi động lại ứng dụng

---

## 🔧 Tùy chỉnh nâng cao

### Thay đổi cổng mặc định
Sửa file `package.json`:
```json
"scripts": {
  "dev": "next dev -p 8080"
}
```

### Build cho production
```bash
npm run build
npm start
```

### Chạy trên mạng LAN
1. Tìm địa chỉ IP máy tính (ipconfig/ifconfig)
2. Các thiết bị khác truy cập: `http://[IP]:3000`
3. Ví dụ: `http://192.168.1.100:3000`

---

## 📞 Hỗ trợ

- **Email:** anffne1@gmail.com
- **Tác giả:** Nguyễn Bảo Thiên Ân
- **Dự án:** Tin Học Trẻ 2026

---

## 📄 Giấy phép

Dự án này được phát triển cho mục đích giáo dục và nghiên cứu khoa học.

---

**Chúc bạn học tập hiệu quả! 🎓**

