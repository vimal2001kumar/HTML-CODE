const form = document.querySelector('form');
        const ElectronicsDiv = document.getElementById('Electronics');
        const FoodDiv = document.getElementById('Food');
        const SkinCareDiv = document.getElementById('SkinCare');

        // Display existing items on page load
        displayItems();

        // Handle form submission
        form.addEventListener('submit', (e) => {
            e.preventDefault();

            const productCode = document.getElementById('productCode').value;
            const productName = document.getElementById('product').value;
            const category = document.getElementById('category').value;

            // Add the item to local storage
            addItemByCategory(category, productCode, productName);

            // Clear the form
            form.reset();

            // Update the list of items on the page
            displayItems();
        });

        // Add item to local storage
        function addItemByCategory(category, productCode, productName) {
            // Get existing items for the selected category
            const items = localStorage.getItem(category);
            let itemList = items ? JSON.parse(items) : [];

            // Add the new item to the list and save it to local storage
            itemList.push({ category, productCode, productName});
            localStorage.setItem(category, JSON.stringify(itemList));
        }
        function displayItems() {
    // Clear the existing list of items
            ElectronicsDiv.innerHTML = '';
            FoodDiv.innerHTML = '';
            SkinCareDiv.innerHTML = '';

            // Loop through all items in local storage and add them to the appropriate category div
            for (let i = 0; i < localStorage.length; i++) {
                const key = localStorage.key(i);
                const value = localStorage.getItem(key);

                if (key === 'Electronics') {
                    const itemList = JSON.parse(value);
                    for (let j = 0; j < itemList.length; j++) {
                        const { category, productCode, productName } = itemList[j];

                        const itemDiv = document.createElement('li');
                        itemDiv.classList.add('item');
                        itemDiv.textContent = `${productCode} - ${category} - ${productName}`;

                        const deleteBtn = document.createElement('button');
                        deleteBtn.textContent = 'Delete Order';
                        deleteBtn.addEventListener('click', () => {
                            // Remove the item from local storage
                            itemList.splice(j, 1);
                            localStorage.setItem(key, JSON.stringify(itemList));

                            // Update the list of items on the page
                            displayItems();
                        });

                        itemDiv.appendChild(deleteBtn);
                        ElectronicsDiv.appendChild(itemDiv);
                    }
                }
                 else if (key === 'Food') {
                    const itemList = JSON.parse(value);
                    for (let j = 0; j < itemList.length; j++) {
                        const { category, productCode, productName } = itemList[j];

                        const itemDiv = document.createElement('li');
                        itemDiv.classList.add('item');
                        itemDiv.textContent = `${productCode} - ${category} - ${productName}`;

                        const deleteBtn = document.createElement('button');
                        deleteBtn.textContent = 'Delete Order';
                        deleteBtn.addEventListener('click', () => {
                            // Remove the item from local storage
                            itemList.splice(j, 1);
                            localStorage.setItem(key, JSON.stringify(itemList));

                            // Update the list of items on the page
                            displayItems();
                        });

                        itemDiv.appendChild(deleteBtn);
                        FoodDiv.appendChild(itemDiv);
                    }
                }
                else if (key === 'SkinCare') {
                    const itemList = JSON.parse(value);
                    for (let j = 0; j < itemList.length; j++) {
                        const { category, productCode, productName } = itemList[j];

                        const itemDiv = document.createElement('li');
                        itemDiv.classList.add('item');
                        itemDiv.textContent = `${productCode} - ${category} - ${productName}`;

                        const deleteBtn = document.createElement('button');
                        deleteBtn.textContent = 'Delete Order';
                        deleteBtn.addEventListener('click', () => {
                            // Remove the item from local storage
                            itemList.splice(j, 1);
                            localStorage.setItem(key, JSON.stringify(itemList));

                            // Update the list of items on the page
                            displayItems();
                        });

                        itemDiv.appendChild(deleteBtn);
                        SkinCareDiv.appendChild(itemDiv);
                    }
                }
            }
        }
