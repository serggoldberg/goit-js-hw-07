const categoriesCount = document.querySelectorAll(".item").length;
console.log(`Number of categories: ${categoriesCount}`);

document.querySelectorAll(".item").forEach(category => {
    const categoryName = category.querySelector('h2').textContent;
    const categoryItemCount = category.querySelectorAll('ul > li').length;

    console.log(`Категорія: ${categoryName}`);
    console.log(`Кількість елементів: ${categoryItemCount}`);
});
