const toggleButton = document.getElementById('themeToggle');

// 載入時檢查是否有儲存深色模式
if (localStorage.getItem('theme') === 'dark') {
    document.body.classList.add('dark');
}

// 點擊切換
toggleButton.addEventListener('click', function () {
    document.body.classList.toggle('dark');

    if (document.body.classList.contains('dark')) {
        localStorage.setItem('theme', 'dark');
    } else {
        localStorage.setItem('theme', 'light');
    }
});