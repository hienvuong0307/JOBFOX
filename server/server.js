const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();

app.use(cors({
  origin: 'http://localhost:3000',
  credentials: true
}));

app.use(bodyParser.json());

app.get('/', (req, res) => {
  console.log('Test route accessed');
  res.json({ message: 'Server is running!' });
});


app.post('/user/login', async (req, res) => {
  try {
    console.log('Thông tin đăng nhập', req.body);
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({
        success: false,
        message: 'Email và mật khẩu là bắt buộc'
      });
    }
    res.status(200).json({
      success: true,
      message: 'Đăng nhập thành công',
      accessToken: 'mock_access_token',
      refreshToken: 'mock_refresh_token',
      user: {
        id: 1,
        email: email,
        role: 'employer',
        firstName: 'Test',
        lastName: 'User'
      }
    });

  } catch (error) {
    console.error('Login error:', error);
    res.status(500).json({
      success: false,
      message: 'Lỗi server: ' + error.message
    });
  }
});

app.post('/user/signup', async (req, res) => {
  try {
    console.log('Thông tin đăng ký:', req.body);

    const {
      email,
      password,
      firstName,
      lastName,
      contactNumber,
      role,
      status
    } = req.body;

    if (!email || !password) {
      return res.status(400).json({
        success: false,
        message: 'Email và mật khẩu là bắt buộc'
      });
    }

    res.status(200).json({
      success: true,
      message: 'Đăng ký thành công',
      data: {
        email,
        firstName,
        lastName,
        contactNumber,
        role,
        status
      }
    });

  } catch (error) {
    console.error('Signup error:', error);
    res.status(500).json({
      success: false,
      message: 'Lỗi server: ' + error.message
    });
  }
});

app.post('/jobs', async (req, res) => {
  try {
    console.log('Thông tin đăng tuyển:', req.body);
    
    const {
      companyName,
      CompanyTitle,
      description,
      CompanyLogoUrl,
      email,
      website,
      companyContactNumber,
      location,
      jobTitle,
      positionName,
      experience,
      skillRequired,
      salary,
      hiringManagers
    } = req.body;

    if (!companyName || !jobTitle || !location || !salary) {
      return res.status(400).json({
        success: false,
        message: 'Thiếu thông tin bắt buộc: Tên công ty, Vị trí, Địa điểm, Mức lương'
      });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email && !emailRegex.test(email)) {
      return res.status(400).json({
        success: false,
        message: 'Email không hợp lệ'
      });
    }

    if (salary <= 0) {
      return res.status(400).json({
        success: false,
        message: 'Mức lương phải lớn hơn 0'
      });
    }
    const jobPosting = {
      id: Date.now(),
      companyName,
      CompanyTitle,
      description,
      CompanyLogoUrl,
      email,
      website,
      companyContactNumber,
      location,
      jobTitle,
      positionName,
      experience,
      skillRequired,
      salary,
      applierInfo: [],
      hiringManagers,
      status: 'active',
      createdAt: new Date().toISOString()
    };

    console.log('Job posting created:', jobPosting);

    res.status(201).json({
      success: true,
      message: 'Đăng tin tuyển dụng thành công',
      data: jobPosting
    });

  } catch (error) {
    console.error('Job posting error:', error);
    res.status(500).json({
      success: false,
      message: 'Lỗi server: ' + error.message
    });
  }
});

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${PORT}`);
});