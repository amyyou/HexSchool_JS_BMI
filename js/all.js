var allBtn = document.querySelector('.btn_all')
var resultBtn = document.querySelector('.btn_result');
var bmiNumber = document.querySelector('.btn_number');
var bmiTitle = document.querySelector('.btn_title');

var list = document.getElementById('listId');
var listIconDel = document.querySelector('.list_icon_del');
var clearAllList = document.querySelector('.btn_clear_all');

var bmiArr = JSON.parse(localStorage.getItem('BMI')) || [];

var type = '';
var size = '';
var time = '';

updateListUI();
//監聽事件
resultBtn.addEventListener('click', calculate, false);
list.addEventListener('click' , delList , false);
clearAllList.addEventListener('click' , delAllList , false);

function calculate(e) {
    e.preventDefault();
    var height = document.getElementById('height');
    var weight = document.getElementById('weight');

    //init (刷新)
    //console.log(allBtn.classList);
    if(allBtn.classList.length === 2){
        height.value = '';
        weight.value = '';
        allBtn.classList = 'btn_all';
        bmiNumber.textContent = '看結果';
        bmiTitle.textContent = '';
        return;
    }

    //計算BMI
    height = height.value;
    weight = weight.value;
    if (height === '' || weight === '') {
        alert('請輸入身高及體重')
        return;
    }

    height = parseFloat(height);
    weight = parseFloat(weight);

    //console.log(height + ' , ' + weight);
    if (height === 0 || weight === 0) {
        alert('身高體重不得為0')
        return;
    }

    height = Math.round(height * 100) / 100;
    weight = Math.round(weight * 100) / 100;
    heightM = height * 0.01;
    var bmi = weight / (heightM * heightM);
    bmi = bmi.toFixed(2);
    // console.log("BMI = " + bmi);


    //定義BMI區間
    bmiDefInterval(bmi);
    //更新UI
    allBtn.classList.add('btn_all-'+size); //新增一個類名
    bmiNumber.textContent = bmi;
    bmiTitle.textContent = type;


    //取得當前時間
    getDate();
    addList(height , weight , bmi , type , size , time);


}

function bmiDefInterval(num) {
    if (num < 18.5) {
        type = '過輕';
        size = 'sm'
        return type,size;
    } else if (num >= 18.5 && num < 25) {
        type = '理想';
        size = 'md'
        return type,size;
    }else if (num >= 25 && num < 30) {
        type = '過重';
        size = 'lg'
        return type,size;
    }else if (num >= 30 && num < 35) {
        type = '輕度肥胖';
        size = 'xl'
        return type,size;
    }else if (num >= 35 && num < 40) {
        type = '中度肥胖';
        size = 'xl'
        return type,size;
    }else if (num >= 40 ) {
        type = '重度肥胖';
        size = '2l'
        return type,size;
    }
}

function getDate(){
    var today = new Date();
    var date = today.getDate().toString();
    var month = (today.getMonth() + 1).toString();
    var year = today.getFullYear().toString();

    if(date.length === 1){
        date = '0'+date;
    }
    if(month.length === 1){
        month = '0'+month;
    }

    time = month + '-' + date + '-' + year;
    //console.log('time = ' + time);
    return 
}

function addList(getHeight , getWeight , getBmi , getType , getSize , getTime){
     bmiArr.push({
         height:getHeight,
         weight:getWeight,
         bmi:getBmi,
         type:getType,
         size:getSize,
         time:getTime,
     });

     var bmiStr = JSON.stringify(bmiArr);
     //console.log("bmiStr = " + bmiStr);
     //更新UI
     updateListUI();
     
}

function updateListUI(){
     
    var listNoRecord = document.getElementById('listNoRecord');
    var str=''
    var bmiLen = bmiArr.length;


    if(bmiArr.length === 0){
        listNoRecord.textContent = '--無紀錄--';
        clearAllList.style.display = 'none';

    }else{
        listNoRecord.textContent = '';
        clearAllList.style.display = 'block';

    }

    for(var i=0 ; i<bmiLen ; i++){
        str += '<tr class="list_all list_all-'+bmiArr[i].size+'">\
        <td class="list_item">'+bmiArr[i].type+'</td>\
        <td class="list_item"><span class="list_small">BMI</span>'+bmiArr[i].bmi+'</td>\
        <td class="list_item"><span class="list_small">weight</span>'+bmiArr[i].weight+'</td>\
        <td class="list_item"><span class="list_small">height</span>'+bmiArr[i].height+'</td>\
        <td class="list_item"><span class="list_small">'+bmiArr[i].time+'</span></td>\
        <td class="list_item"><a href="#" class="list_icon_del" ><i class="fas fa-trash-alt" data-index="'+ i +'"></i></a></td>\
    </tr>';
    }

    list.innerHTML = str;

}

function delList(e){
    e.preventDefault();
    //console.log(e.target.nodeName);
    //只能點擊垃圾桶區域
    if(e.target.nodeName !== 'I'){
        return;
    }
    var index = e.target.dataset.index;
    //console.log(index);
    bmiArr.splice(index , 1);
    var bmiStr = JSON.stringify(bmiArr);
    localStorage.setItem('BMI' , bmiStr);
    updateListUI();
    
}

function delAllList(){
    var height = document.getElementById('height');
    var weight = document.getElementById('weight');
    height.value = '';
    weight.value = '';
    allBtn.classList = 'btn_all';
    bmiNumber.textContent = '看結果';
    bmiTitle.textContent = '';

    var bmiLen = bmiArr.length;
    for(var i=0 ; i<bmiLen ; i++){
        bmiArr.splice(i,bmiLen);
        //console.log(i);
    }
    var bmiStr = JSON.stringify(bmiArr);
    localStorage.setItem('BMI' , bmiStr);

    updateListUI();
    
}