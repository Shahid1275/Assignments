
function toggleAllCheckboxes() {
    const masterCheckbox = document.getElementById('masterCheckbox');
    const checkboxes = document.querySelectorAll('.rowCheckbox');
    checkboxes.forEach(checkbox => {
        checkbox.checked = masterCheckbox.checked;
    });
} 

function toggleRows() {
    const dropdown = document.getElementById('dropdown');
    const button = document.getElementById('toggleButton');
    const rows = document.querySelectorAll(' tbody tr');
    
    if (dropdown.value === 'hide') {
        rows.forEach(row => {
            if (row.querySelector('.rowCheckbox').checked) {
                row.classList.add('hidden');
            } 
        }
    );
        button.textContent = 'show';
        dropdown.value = 'show';
    } else {
        rows.forEach(row => {
            row.classList.remove('hidden');
        });
        button.textContent = 'Hide';
        dropdown.value = 'hide';
    }
}