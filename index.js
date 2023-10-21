let cardList = [{ content: '耿昌宇老师，我是7月5日购买课程的学员，还有一个视频就全部学完了。你的课程简单易学非常感谢，恰逢新年来临送上我的祝福！' },
{ content: '耿昌宇老师，我是7月5日购买课程的学员，还有一个视频就全部学完了。你的课程简单易学非常感谢，恰逢新年来临送上我的祝福！' },
{ content: '耿昌宇老师，我是7月5日购买课程的学员，还有一个视频就全部学完了。你的课程简单易学非常感谢，恰逢新年来临送上我的祝福！' },
{ content: '耿昌宇老师，我是7月5日购买课程的学员，还有一个视频就全部学完了。你的课程简单易学非常感谢，恰逢新年来临送上我的祝福！' },
{ content: '耿昌宇老师，我是7月5日购买课程的学员，还有一个视频就全部学完了。你的课程简单易学非常感谢，恰逢新年来临送上我的祝福！' },
{ content: '耿昌宇老师，我是7月5日购买课程的学员，还有一个视频就全部学完了。你的课程简单易学非常感谢，恰逢新年来临送上我的祝福！' },
{ content: '耿昌宇老师，我是7月5日购买课程的学员，还有一个视频就全部学完了。你的课程简单易学非常感谢，恰逢新年来临送上我的祝福！' },
{ content: '耿昌宇老师，我是7月5日购买课程的学员，还有一个视频就全部学完了。你的课程简单易学非常感谢，恰逢新年来临送上我的祝福！' },
{ content: '耿昌宇老师，我是7月5日购买课程的学员，还有一个视频就全部学完了。你的课程简单易学非常感谢，恰逢新年来临送上我的祝福！' },
{ content: '耿昌宇老师，我是7月5日购买课程的学员，还有一个视频就全部学完了。你的课程简单易学非常感谢，恰逢新年来临送上我的祝福！' },
{ content: '耿昌宇老师，我是7月5日购买课程的学员，还有一个视频就全部学完了。你的课程简单易学非常感谢，恰逢新年来临送上我的祝福！' },
{ content: '耿昌宇老师，我是7月5日购买课程的学员，还有一个视频就全部学完了。你的课程简单易学非常感谢，恰逢新年来临送上我的祝福！' },
{ content: '耿昌宇老师，我是7月5日购买课程的学员，还有一个视频就全部学完了。你的课程简单易学非常感谢，恰逢新年来临送上我的祝福！' },
{ content: '耿昌宇老师，我是7月5日购买课程的学员，还有一个视频就全部学完了。你的课程简单易学非常感谢，恰逢新年来临送上我的祝福！' },
{ content: '耿昌宇老师，我是7月5日购买课程的学员，还有一个视频就全部学完了。你的课程简单易学非常感谢，恰逢新年来临送上我的祝福！' },
{ content: '耿昌宇老师，我是7月5日购买课程的学员，还有一个视频就全部学完了。你的课程简单易学非常感谢，恰逢新年来临送上我的祝福！' },
{ content: '耿昌宇老师，我是7月5日购买课程的学员，还有一个视频就全部学完了。你的课程简单易学非常感谢，恰逢新年来临送上我的祝福！' }];

let backgroundColors = ['#DBEAD5', '#EBD7D7', '#FDFBE9', '#D7DBEB'];

const PAGE = {
    data: {
        backgroundColors: backgroundColors,
        defaultDatas: cardList,
        itemWidth: 320,
        itemHeight: 158,
        paddingOffset: 0,
        zIndex: 0,
        item: null,
        itemOffsetTop: null,
        itemOffsetLeft: null,
        pageX: null,
        pageY: null,
        isLock: true,
    },

    init: function () {
        this.bind();
        this.setDefaultData();
    },

    bind: function () {
        let cardList = document.getElementById('card-list');
        this.onEventLister(cardList, 'mousedown', 'card-item', this.handleMouseDown);
        window.addEventListener('mousemove', this.handleMouseMove);
        window.addEventListener('mouseup', this.handleMouseUp);
        this.onEventLister(cardList, 'click', 'close-icon', this.removeCard);
    },

 
    onEventLister: function (parentNode, action, childClassName, callback) {
        parentNode.addEventListener(action, function (e) {
            let elementCheck = e.target;

            // 如果触发事件的元素是一个图片，则考虑它的父元素
            if (elementCheck.tagName === 'IMG') {
                elementCheck = elementCheck.parentElement;
            }
        
            elementCheck.className.indexOf(childClassName) >= 0 && callback(e);

        })
    },

    setDefaultData: function () {
        PAGE.data.defaultDatas.forEach((data) => PAGE.addCard(data.content));
    },

    addCard: function (content) {
        let cardList = document.getElementById('card-list');
        let containerWidth = cardList.offsetWidth;
        let containerHeight = cardList.offsetHeight;
        let itemWidth = PAGE.data.itemWidth;
        let itemHeight = PAGE.data.itemHeight;
        let paddingOffset = PAGE.data.paddingOffset;
        let maxWidth = containerWidth - itemWidth - paddingOffset;
        let maxHeight = containerHeight - itemHeight - paddingOffset;
        let randomTop = PAGE.randomBetween(paddingOffset, maxHeight);
        let randomLeft = PAGE.randomBetween(paddingOffset, maxWidth);
        let zIndex = ++PAGE.data.zIndex;
        let backgroundColors = PAGE.data.backgroundColors;
        let backgroundColor = backgroundColors[zIndex % backgroundColors.length];
        
        let cardItem = document.createElement('div');
        cardItem.setAttribute('class', 'card-item');
        cardItem.innerHTML = `
        <p class="card-item-name">小兔兔说：</p>
        <p class="card-item-text">${content}</p>
        <div class="close-icon">
            <img src="./image/close.png" alt="">
        </div>
    `;

        let styleStr = `
            z-index:${zIndex};
            background:${backgroundColor};
            top:${randomTop}px;
            left:${randomLeft}px;`;
        cardItem.setAttribute('style', styleStr);
        cardList.appendChild(cardItem);
    },

    randomBetween: function (min, max) {
        return Math.floor(Math.random() * (max - min) + min);
    },

    handleMouseDown: function (e) {
        let item = e.target;
        item.style.zIndex = ++PAGE.data.zIndex;
        PAGE.data.itemOffsetTop = item.offsetTop;
        PAGE.data.itemOffsetLeft = item.offsetLeft;
        PAGE.data.pageX = e.pageX;
        PAGE.data.pageY = e.pageY;
        PAGE.data.item = item;
        PAGE.data.isLock = false;
    },

    handleMouseMove: function (e) {
        if (!PAGE.data.isLock) {

            let cardList = document.getElementById('card-list');
            let containerWidth = cardList.offsetWidth;
            let containerHeight = cardList.offsetHeight;
            let itemWidth = PAGE.data.itemWidth;
            let itemHeight = PAGE.data.itemHeight;
            let paddingOffset = PAGE.data.paddingOffset;

            let maxWidth = containerWidth - itemWidth - paddingOffset;
            let maxHeight = containerHeight - itemHeight - paddingOffset;
            let translateX = e.pageX - PAGE.data.pageX + PAGE.data.itemOffsetLeft;
            let translateY = e.pageY - PAGE.data.pageY + PAGE.data.itemOffsetTop;

            translateX = translateX > maxWidth ? maxWidth : translateX;
            translateY = translateY > maxHeight ? maxHeight : translateY;
            translateX = translateX < paddingOffset ? paddingOffset : translateX;
            translateY = translateY < paddingOffset ? paddingOffset : translateY;

            PAGE.data.item.style.left = translateX + 'px';
            PAGE.data.item.style.top = translateY + 'px';
        }
    },

    handleMouseUp: function () {
        PAGE.data.isLock = true
    },

    removeCard: function (e) {
        let cardItem = e.target.closest('.card-item');
        cardItem.remove();
    }

}

PAGE.init();