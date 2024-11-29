// Получаем все кнопки для отображения изображений
var buttons = document.getElementsByClassName("show-image");

// Добавляем обработчик событий для каждой кнопки
for (var i = 0; i < buttons.length; i++) {
    buttons[i].onclick = function() {
        // Получаем изображение, которое соответствует кнопке
        var image = this.nextElementSibling; // Получаем следующий элемент (изображение)
        
        // Проверяем, отображается ли изображение
        if (image.style.display === "none") {
            image.style.display = "block"; // Показываем изображение
        } else {
            image.style.display = "none"; // Скрываем изображение
        }
    }
}
