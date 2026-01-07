/* الخطوط والتهيئة العامة */
body {
  margin: 0;
  font-family: "Tahoma", Arial, sans-serif;
  background: #f9f9f9;
  color: #222;
  direction: rtl;
}

header {
  background: #2c3e50;
  color: #fff;
  padding: 14px;
  text-align: center;
  font-size: 20px;
  font-weight: bold;
}

/* شريط التنقل */
nav {
  display: flex;
  justify-content: space-around;
  background: #34495e;
  padding: 6px 0;
  position: sticky;
  top: 0;
  z-index: 100;
}

nav button {
  background: none;
  border: none;
  color: #fff;
  font-size: 22px;
  cursor: pointer;
  padding: 6px 10px;
}

nav button.active {
  background: #1abc9c;
  border-radius: 50%;
}

/* الصفحات */
.page {
  display: none;
  padding: 16px;
}

.page.active {
  display: block;
}

.container {
  background: #fff;
  padding: 16px;
  border-radius: 8px;
  box-shadow: 0 2px 6px rgba(0,0,0,0.1);
}

/* الأزرار */
.btn {
  padding: 8px 14px;
  border-radius: 4px;
  cursor: pointer;
  font-size: 14px;
}

.btn.main {
  background: #27ae60;
  color: #fff;
  border: none;
}

.btn.ghost {
  background: #ecf0f1;
  color: #333;
  border: 1px solid #ccc;
}

/* الأزرار الكبيرة (الصفحة الرئيسية) */
.big-btn {
  display: block;
  width: 100%;
  margin: 8px 0;
  padding: 14px;
  font-size: 18px;
  border-radius: 8px;
  border: none;
  cursor: pointer;
  color: #fff;
}

.big-btn.green { background: #27ae60; }
.big-btn.blue { background: #2980b9; }
.big-btn.orange { background: #e67e22; }
.big-btn.gray { background: #7f8c8d; }
.big-btn.purple { background: #8e44ad; }

/* الجداول */
.table-wrapper {
  overflow-x: auto;
}

table {
  width: 100%;
  border-collapse: collapse;
}

table th, table td {
  border: 1px solid #ddd;
  padding: 8px;
  text-align: center;
}

table th {
  background: #f0f0f0;
}

table tbody tr:nth-child(even) {
  background: #f9f9f9;
}

/* البطاقات */
.card {
  background: #fff;
  padding: 14px;
  border-radius: 8px;
  box-shadow: 0 2px 6px rgba(0,0,0,0.1);
}

/* الحقول */
.input {
  padding: 6px 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.input.small {
  width: 120px;
}

/* القائمة المنسدلة لخيارات متقدمة */
.dropdown {
  position: relative;
  display: inline-block;
  margin: 6px 0;
}

.dropdown-content {
  display: none;
  position: absolute;
  background: #fff;
  min-width: 160px;
  box-shadow: 0px 2px 6px rgba(0,0,0,0.2);
  border-radius: 4px;
  z-index: 1;
}

.dropdown-content .btn {
  display: block;
  width: 100%;
  text-align: right;
  border: none;
  background: none;
  padding: 6px 10px;
  cursor: pointer;
}

.dropdown:hover .dropdown-content {
  display: block;
}

/* Responsive للموبايل */
@media (max-width: 600px) {
  nav button { font-size: 20px; }
  .big-btn { font-size: 16px; padding: 12px; }
  .container { padding: 12px; }
}