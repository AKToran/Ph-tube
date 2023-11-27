const loadVideo = (type) => {
    fetch(`https://openapi.programming-hero.com/api/videos/category/${type}`)
    .then(res => res.json())
    .then(data => displayVideo(data.data))
    .catch(err =>  console.log(err));
};

const displayVideo = (data) => {
    
    const display = document.getElementById("display-container");

    display.style.display = 'flex';
    display.innerHTML = "";

    var l = data.length;
    console.log(l);

    if (l == 0) {
        display.innerHTML = `
        <div class="no-video">
            <div>
                <img class="m-4" src="./Icon.png" alt="OOOOOOOOPS!!">
            </div>
            <div>
                <h1>Oops! No video here!!</h1>
            </div>
        </div>
        `;
    };


    data.forEach((video) => {
        console.log(video); 
        const  videoData = document.createElement("div");
        videoData.classList.add("video-data");

        videoData.innerHTML = `
        <img class="vid-thumb" src=${video.thumbnail} alt="">
        
        <div class ="d-flex row mt-2" >
            <div class = "col-3">
                <img class="profile-pic" src=${video.authors[0].profile_picture} alt="profile-pic">
            </div>
            <div class="col-9">
                <h5>${video.title}</h5>
                <p>${video.authors[0].profile_name} ${video.authors[0].verified? '<i class="fa fa-check-circle" aria-hidden="true"></i>':''}</p>
                <p>${video.others.views}</p>
            </div>
        </div>
        
        
        `;

        display.appendChild(videoData);

    });


    // sort section 
    const sorted = document.getElementById("sorted-container");
    sorted.style.display = 'none';
    sorted.innerHTML = "";

    data.sort((a,b) => parseInt(b.others.views) - parseInt(a.others.views));

    data.forEach((video) => {
        // console.log(video.others.views);
        
        const  videoSort = document.createElement("div");
        videoSort.classList.add("video-sort");

        videoSort.innerHTML = `
        <img class="vid-thumb" src=${video.thumbnail} alt="">
        
        <h4>${video.title}</h4>
        
        <h6>${video.authors[0].profile_name}</h6>

        <p>${video.others.views}</p>
        
        `;
        sorted.appendChild(videoSort);
    });

    // ascending sorted 

    const sortedTwo = document.getElementById("sorted-two");
    sortedTwo.style.display = 'none';
    sortedTwo.innerHTML = "";

    data.sort((a,b) => parseInt(a.others.views) - parseInt(b.others.views));

    data.forEach((video) => {
    
    
    const  videoSortTwo = document.createElement("div");
    videoSortTwo.classList.add("video-sort-two");

    videoSortTwo.innerHTML = `
    <img class="vid-thumb" src=${video.thumbnail} alt="">
    
    <h4>${video.title}</h4>
    
    <h6>${video.authors[0].profile_name}</h6>

    <p>${video.others.views}</p>
    
    `;

    sortedTwo.appendChild(videoSortTwo);
});

};

loadVideo('1000');

let cnt = 0;
const showSorted = () => {
    const display = document.getElementById("display-container");
    const sorted = document.getElementById("sorted-container");
    const sortedTwo = document.getElementById("sorted-two");

    display.style.display = 'none';
    

    

    if (cnt % 2 == 0) {
        sorted.style.display = 'flex';  
        sortedTwo.style.display = 'none';  
    }
    else{
        sorted.style.display = 'none';  
        sortedTwo.style.display = 'flex';
    }
    cnt += 1;

};