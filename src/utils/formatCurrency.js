export default function formatCurrency(value) {
  // Chuyển giá trị số thành định dạng tiền tệ VND
  const formattedValue = value.toLocaleString("vi-VN", {
    style: "currency",
    currency: "VND",
  });

  return formattedValue;
}

// Sử dụng hàm để định dạng số tiền
const money = 123456789;
const formattedMoney = formatCurrency(money);

console.log(formattedMoney); // Kết quả: "123.456.789 ₫"
