# LAB 09 — Modify & Extend React Native Navigation

## Nội dung đã thực hiện

- Bổ sung thuộc tính `floor` vào kiểu dữ liệu `Room` và cập nhật cho toàn bộ danh sách phòng.
- Hiển thị thông tin tầng (`Floor`) trên `RoomsScreen` và `RoomDetailScreen`.
- Thay đổi tên tab `Rooms` thành `Room Explorer`.
- Tạo màn hình mới `BookingFormScreen` và đăng ký vào `RoomsStackNavigator`.
- Mở rộng `RoomsStackParamList` với route `BookingForm`, nhận tham số `roomId`.
- Thêm nút **Book This Room** tại `RoomDetailScreen` để điều hướng sang `BookingFormScreen`.
- Sử dụng `route.params.roomId` để xác định và hiển thị thông tin phòng được chọn.
- Bổ sung ô nhập `Purpose` bằng `TextInput` và quản lý dữ liệu với `useState`.
- Thêm validation, yêu cầu nhập Purpose trước khi xác nhận đặt phòng.
- Hiển thị thông báo xác nhận phòng tương ứng khi nhập dữ liệu hợp lệ.