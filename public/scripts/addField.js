document.querySelector("#add-time")

    .addEventListener('click', cloneField)


function cloneField() {

    const newFieldContainer = document.querySelector('.schedule-item').cloneNode(true)

    const fields = newFieldContainer.querySelector('input')

    if (fields == fields) {
        fields.value = ""

    }




    document.querySelector('#schedule-items').appendChild(newFieldContainer);
}
