# JavaScript 入門篇 - 學徒的試煉 (BMI)

使用技術 : HTML 、 CSS 、Bootstrap 4 、 Javascript         
網站連結 : https://amyyou.github.io/HexSchool_JS_BMI/

### 操作說明
1. 使用者可透過下拉選單選擇行政區域
2. 使用者可透過熱門按鈕選擇行政區域
3. 顯示詳細的行政區資訊於下方列表

### 程式說明
1. 使用document.querySelector()方法選取 id 或 class 元素(選擇單一元素，抓第一筆資料做更新)
2. 使用document.getElementById()方法選取 id 元素渲染到網頁
3. 使用JSON.parse()將string轉為array，使用JSON.stringify()將array轉為string
4. 使用addEventListener()監聽使用者點擊事件
5. 使用innerHTML增加標籤(特性是會把裡面給清空，才會在指定的id or class塞你要賦予給他的值)
6. 使用LocalStorage存取瀏覽器歷史資料(localStrorage只會保存 string 資料)      
   -localStorage.setItem(‘key’ , ‘value’) 保存     
   -localStorage.getItem(‘key’) 取出值      
7. 使用Date() 取得本地時間，並呼叫內建函式 getDate()、getMonth()、getFullYear()
8. 使用e.preventDefault取消元素默認行為(例如取消跳轉網頁行為)
9. data-* : 透過 dataset 讀取自訂資料，跟資料做綁定和驗證的動作
10. e.target.nodeName代表 DOM 元素點擊到的節點 (例如UI , LI , A)





