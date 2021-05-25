//******時計を正確に表示し、針が動き続けるアニメーション******
function RotateClock() {
  const today = new Date(); //日時獲得
  let todayHour = today.getHours(); //時
  let todayMinute = today.getMinutes(); //分
  let todaySecond = today.getSeconds(); //秒
  // 動かしたい画像のidを代入
  let hourHand = document.getElementById("rotate_hand_hour");
  let minHand = document.getElementById("rotate_hand_min");
  let secHand = document.getElementById("rotate_hand_sec");

  // 確認用　↓　（コメント外してコンソールで確認出来ます）
  // console.log(todayHour + "時");
  // console.log(todayMinute + "分");
  // console.log(todaySecond + "秒");
  // console.log("ーーーーーーーーーーーーーーーーーーー");

  //******秒針の表示方法********
  // 時計の1メモリ＝6度(360deg/60s=6)なので、一秒ごとに6度回す
  let secDegree = todaySecond * 6;
  secHand.style.cssText = `transform:rotate(${secDegree}deg)`;

  //*******分針の表示方法******
  // 時計の1メモリ＝6度(360deg/60s=6)なので、一分ごとに6度回す
  let minDegree = todayMinute * 6;
  minHand.style.cssText = `transform:rotate(${minDegree}deg)`;

  // ********時針の表示方法(if使いすぎ・見ずらい)*********
  // 秒針、分針と仕組みは同じですが、時針は分針が12分毎に1メモリ動くのでその条件分岐も書きます。
  if (12 <= todayMinute < 24) {
    if (todayHour <= 12) {
      let hourDegree = todayHour * 30 + 12;
      hourHand.style.cssText = `transform:rotate(${hourDegree}deg)`;
    } else {
      let hourDegree = (todayHour - 12) * 30 + 12;
      hourHand.style.cssText = `transform:rotate(${hourDegree}deg)`;
    }
  } else if (24 <= todayMinute < 36) {
    if (todayHour <= 12) {
      let hourDegree = todayHour * 30 + 18;
      hourHand.style.cssText = `transform:rotate(${hourDegree}deg)`;
    } else {
      let hourDegree = (todayHour - 12) * 30 + 18;
      hourHand.style.cssText = `transform:rotate(${hourDegree}deg)`;
    }
  } else if (36 <= todayMinute < 48) {
    if (todayHour <= 12) {
      let hourDegree = todayHour * 30 + 24;
      hourHand.style.cssText = `transform:rotate(${hourDegree}deg)`;
    } else {
      let hourDegree = (todayHour - 12) * 30 + 24;
      hourHand.style.cssText = `transform:rotate(${hourDegree}deg)`;
    }
  } else if (48 <= todayMinute < 60) {
    if (todayHour <= 12) {
      let hourDegree = todayHour * 30 + 30;
      hourHand.style.cssText = `transform:rotate(${hourDegree}deg)`;
    } else {
      let hourDegree = (todayHour - 12) * 30 + 30;
      hourHand.style.cssText = `transform:rotate(${hourDegree}deg)`;
    }
  } else {
    if (todayHour <= 12) {
      let hourDegree = todayHour * 30;
      hourHand.style.cssText = `transform:rotate(${hourDegree}deg)`;
    } else {
      let hourDegree = (todayHour - 12) * 30;
      hourHand.style.cssText = `transform:rotate(${hourDegree}deg)`;
    }
  }

  // ******setTimeoutで1秒ごとにRotetaClock()を実行させる(下記の1000=1秒||ms表記なので。)******
  setTimeout(() => {
    RotateClock();
  }, 1000);
}

RotateClock();

// ------------------------------------------------------------------------
// スクロール時に起動する
window.addEventListener("scroll", () => {
  let currentY = window.pageYOffset;
  let bg = document.getElementById("opacity_change");
  let kaitori = document.getElementById("kaitori_text");

  // windowの高さによってopacityが変わる
  if (currentY > 50) {
    let opacRate = (currentY - 300) * 0.002;
    let realColor = 1 - opacRate;
    bg.style.cssText = `opacity: ${realColor}`;
  }

  // windowの高さによってcolorが変わる
  if (currentY > 265) {
    let textColor = currentY * 0.25;
    kaitori.style.cssText = `color: rgb(${textColor},${textColor},${textColor})`;
  }

  //watch back up behind
  // let watchFadeOut = document.getElementById("watch_fadeout");
  // if (currentY > 0 && currentY <= 200) {
  //   let fading = currentY - 80;
  //   if (fading > 1) {
  //     console.log(fading);
  //     watchFadeOut.style.cssText = `z-index: ${fading}`;
  //   }
  // }

  //*****PCのみ有効******
  if (!navigator.userAgent.match(/(iPhone|iPad|iPod|Android)/)) {
    if (currentY > 30) {
      let firstSlide = document.getElementById("watch_first_para");
      firstSlide.classList.add("slide");
      firstSlide.style.visibility = "visible";
    }
    if (currentY > 550) {
      let secondSlide = document.getElementById("watch_second_para");
      secondSlide.classList.add("slide");
      secondSlide.style.visibility = "visible";
    }
    if (currentY > 1000) {
      kaitori.classList.add("scaled");
    }
  }
  //******SP時のみ有効******
  if (navigator.userAgent.match(/(iPhone|iPad|iPod|Android)/)) {
    if (currentY > 650) {
      let secondSlide = document.getElementById("watch_second_para");
      secondSlide.classList.add("slide");
      secondSlide.style.visibility = "visible";
    }
    if (currentY > 1220) {
      kaitori.classList.add("scaled");
    }
  }
});
