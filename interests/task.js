// interests = document.querySelectorAll('.interest')
// for (let interest of interests) {
//     interest.addEventListener('change', () => {
//         if (interest.closest('.interests').className == 'interests interests_main'){
//             subCheckboxes = interest.querySelector('.interests_active').querySelectorAll('input')
//             for (let input of subCheckboxes) {
//                 console.log(input)
//                 input.checked = true
//             }
//         }
//     })
// }

mainCheckboxes = document.querySelectorAll('div.interests_main > ul > li > label > input')
for (let checkbox of mainCheckboxes) {
    checkbox.addEventListener('change', () => {
        subCheckboxes = checkbox.parentElement.nextElementSibling.querySelectorAll('input')
        for (let subCheckbox of subCheckboxes) {
            subCheckbox.checked = checkbox.checked
        }
    })
}