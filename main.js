
    // let visibleCount = 3; // Number of columns visible initially
    // const increment = 4; // Number of columns to show with each button click

    // function showMore() {
    //     // Get all columns with the class 'hidden'
    //     const hiddenColumns = document.querySelectorAll('.hidden');
        
    //     // Calculate how many to show
    //     let countToShow = Math.min(increment, hiddenColumns.length);
        
    //     // Show the next set of hidden columns
    //     for (let i = 0; i < countToShow; i++) {
    //         if (hiddenColumns[i]) {
    //             hiddenColumns[i].classList.remove('hidden');
    //         }
    //     }

    //     // Update the visible count
    //     visibleCount += countToShow;

    //     // Hide the button if all columns are shown
    //     if (visibleCount >= document.querySelectorAll('.col-md-4').length) {
    //         document.getElementById('readMoreBtn').style.display = 'none';
    //     }
    // }

    let visibleCount = 3; // Number of columns visible initially
    const increment = 4; // Number of columns to show with each button click

    function loadMore() {
        // Get all columns with the class 'hidden'
        const hiddenColumns = document.querySelectorAll('.hidden');
        
        // Calculate how many to show
        let countToShow = Math.min(increment, hiddenColumns.length);
        
        // Show the next set of hidden columns
        for (let i = 0; i < countToShow; i++) {
            if (hiddenColumns[i]) {
                hiddenColumns[i].classList.remove('hidden');
            }
        }

        // Update the visible count
        visibleCount += countToShow;

        // Hide the button if all columns are shown
        if (visibleCount >= document.querySelectorAll('.col-md-4').length) {
            document.getElementById('loadMoreBtn').style.display = 'none';
        }
    }