import './register.css'
function Register() {
  return (
    <>
      <div class="container">
          <h2>Thông tin người đăng ký</h2>
          <div class="form-group">
              <label for="fullname">Họ và tên:</label>
              <input type="text" id="fullname" placeholder="Nhập họ và tên"/>
          </div>
          <div class="form-group">
        <label for="birthdate">Ngày sinh:</label>
        <input type="date" id="birthdate"/>
    </div>
    <div class="form-group">
        <label for="idcard">Giấy tờ cá nhân:</label>
        <input type="text" id="idcard" placeholder="Số CMND/CCCD/Hộ chiếu"/>
        <input type="date" id="issuedate" placeholder="Ngày cấp"/>
        <input type="text" id="issueplace" placeholder="Nơi cấp"/>
    </div>
    <div class="form-group">
        <label for="address">Địa chỉ theo hộ khẩu:</label>
        <input type="text" id="address" placeholder="Số nhà/đường phố"/>
        <input type="text" id="hamlet" placeholder="Thôn/xóm"/>
        <input type="text" id="ward" placeholder="Xã/phường"/>
        <input type="text" id="district" placeholder="Quận/huyện"/>
        <input type="text" id="province" placeholder="Tỉnh/thành phố"/>
        <input type="text" id="country" placeholder="Quốc gia"/>
    </div>
    <div class="form-group">
        <label for="currentaddress">Địa chỉ cư trú:</label>
        <input type="text" id="currentaddress" placeholder="Số nhà/đường phố"/>
        <input type="text" id="currenthamlet" placeholder="Thôn/xóm"/>
        <input type="text" id="currentward" placeholder="Xã/phường"/>
        <input type="text" id="currentdistrict" placeholder="Quận/huyện"/>
        <input type="text" id="currentprovince" placeholder="Tỉnh/thành phố"/>
    </div>
    <div class="form-group">
        <label for="phone">Điện thoại liên hệ:</label>
        <input type="text" id="phone" placeholder="Nhập số điện thoại"/>
    </div>
    <div class="form-group">
        <label for="revenueagency">Cơ quan chi trả thu phận tại thời điểm đăng ký:</label>
        <input type="text" id="revenueagency" placeholder="Nhập cơ quan chi trả thu"/>
    </div>
    <button>Lưu</button>
      </div>
    </>
  )
}

export default Register