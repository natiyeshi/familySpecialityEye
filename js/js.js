window.onscroll = (e)=>{
    let call = document.querySelector(".top-contact")

    if(scrollY < 624){
        ch(0)
        call.style.opacity = "0.6"
    }else{
        call.style.opacity = "1"
        if(scrollY > 620 && scrollY < 1200){
            ch(1)
        } else if(scrollY > 1200 && scrollY < 1600){
            ch(2)
        }else if(scrollY > 1600){
            ch(3)
        }
    }
}

function ch(num){
    link =  document.querySelectorAll(".link")

    link.forEach((element,n) => {

        if(num != n){
            element.style.fill = "white"
            
        }
        else{    
            element.style.fill = "black"

        }
    });


}


function copy(val){
    navigator.clipboard.writeText(val)    
}

tr = 0 

function nextService(b = false) {
    if (b == false && tr > -500)
        tr -=  103  
    else if(b == true && tr < 0)
        tr += 103
    else
        return
    console.log(tr);
    services = document.querySelectorAll(".service-div-files")
    services.forEach(element => {
        element.style.transition = "transform 0.4s ease-in-out";
        element.style.transform = "translateX("+tr+"%)";
    });
}

// nextService()
let langCounter = 0
headerTopic = document.querySelector(".header-topic")
headerMidPara = document.querySelector(".header-mid-para")
headerButton = document.querySelector(".header-button")
aboutTopic = document.querySelector(".about-topic")
aboutMidPara = document.querySelector(".about-mid-para")
aboutButton = document.querySelector(".about-button")
serviceTopic = document.querySelector(".service-topic")
serviceMidPara = document.querySelector(".service-mid-para")
serviceDivFile = document.querySelectorAll(".service-div-topic")
serviceDivNotes = document.querySelectorAll(".service-div-notes")

function toEnglish() {
    headerMidPara.innerHTML = `Talking with your <span class="make-white">doctor</span> is one step toward protecting your vision.`
    headerTopic.innerHTML = "<h1>Family Speciality eye clinic</h1>" 
    headerButton.innerHTML = "Continue"
    aboutTopic.innerHTML = '<span class="dash"></span>   <h1>About</h1> <span class="dash"></span>'
    aboutMidPara.innerHTML = 'From providing our patients with truly comprehensive eye exams to the diagnosis  and treatment of <span class="make-white">eye diseases, </span> our team of highly skilled doctors and staff are passionate about your eye health.'
    aboutButton.innerHTML = "Services"
    serviceTopic.innerHTML = '<span class="dash"></span>   <h1>Service</h1> <span class="dash"></span>'
    serviceMidPara.innerHTML = 'problems  <span class="make-white">including</span> We provide services regarding eye '
    serviceDivFile.forEach(element => {
        element.innerHTML = "services"
    });
    serviceDivNotes[0].innerHTML = ''
    serviceDivNotes[1].innerHTML = ''
    serviceDivNotes[2].innerHTML = ''
    serviceDivNotes[3].innerHTML = ''
    serviceDivNotes[4].innerHTML = ''
    serviceDivNotes[5].innerHTML = ''
}

// toEnglish()

function toOromigna(){
    headerMidPara.innerHTML = `Talking with your <span class="make-white">doctor</span> is one step toward protecting your vision.`
    headerTopic.innerHTML = "<h1>Family Speciality eye clinic</h1>" 
    // headerTopic.innerHTML = "<h1>Kiliinika Ispeeshaaliitii Yaala Ijaa FAMILII</h1>" 
    headerButton.innerHTML = "Continue"
    aboutTopic.innerHTML = '<span class="dash"></span>   <h1>About</h1> <span class="dash"></span>'
    aboutMidPara.innerHTML = 'From providing our patients with truly comprehensive eye exams to the diagnosis  and treatment of <span class="make-white">eye diseases, </span> our team of highly skilled doctors and staff are passionate about your eye health.'
    aboutButton.innerHTML = "Services"
    serviceTopic.innerHTML = '<span class="dash"></span>   <h1>Service</h1> <span class="dash"></span>'
    serviceMidPara.innerHTML = 'problems  <span class="make-white">including</span> We provide services regarding eye '
    serviceDivFile.forEach(element => {
        element.innerHTML = "services"
    });
    serviceDivNotes[0].innerHTML = `Moora ljaa bagaqsanii yaaluu fi Leensii nam-tolchee galchuu`
    serviceDivNotes[1].innerHTML = ` Wal'aansa Infeekshinii ljaa(Tiraakoomaa Dabalatee)`
    serviceDivNotes[2].innerHTML = ` Wal'aansaa fi hordoffii dhukkuba GILAAKOOMAA`
    serviceDivNotes[3].innerHTML = `Hordoffii namoota dhibee Sukkaaraa fiDhiibbaa Dhiigaa qabanii`
    serviceDivNotes[4].innerHTML = ` Wal'aansa Foroforii ljaa fi Gogiinsa ljaa . 12.`
    serviceDivNotes[5].innerHTML = 'Safaraa fi Ajaja Golgituu Ijaa 991086i0'
}


function toAmharic(){
    headerMidPara.innerHTML = `ፋሚሊ እስፔሻሊቲ የዐይን ህክምና ክሊኒክ ... ዐላማችን እይታዎት <span class="make-white">እይታዎት</span> ነው፡፡ ከዶክተሮ ጋር መመካከር እይታዎን ለመጠበቅ አንድ እርምጃ ነው፡፡`
    headerTopic.innerHTML = "<h1>ፋሚሊ እስፔሻሊቲ የዐይን ህክምና ክሊኒክ</h1>" 
    headerButton.innerHTML = "ቀጥል"
    aboutTopic.innerHTML = '<span class="dash"></span>   <h1>ስለኛ</h1> <span class="dash"></span>'
    aboutMidPara.innerHTML = "<span class='make-white'>ከ 2021 ጀምሮ...</span> የተለያዮ የዐይን እና ተያያዥ ህክምናዎችን ስንሰጥ የቆየን ሲሆን የአይን ህክምና ፣በዘረፉ የተካኑ ሀኪሞቻችን ለእርሶ የአይን ደህንነት ሁሌም ይጨነቃሉ።።"
    aboutButton.innerHTML = "አገልግሎታችን"
    serviceTopic.innerHTML = '<span class="dash"></span>   <h1>አገልግሎታችን</h1> <span class="dash"></span>'
    serviceMidPara.innerHTML = 'የምንሰጣቸው  <span class="make-white"> አገልግሎቶች ...</span> '
    serviceDivFile.forEach(element => {
        element.innerHTML = "ዐገልግሎት"
    });
    serviceDivNotes[0].innerHTML = 'የዐይን ሞራ ግርዶሽ ቀዶ-ህክምና እና በአርቴፊሻአል ሌንስ መተካት'
    serviceDivNotes[1].innerHTML = 'የዐይን ኢንፌክሽን ህክምና (ትራኮማን ጨምሮ)'
    serviceDivNotes[2].innerHTML = 'የግላኮማ በሽታ ህክምና እና ክትትል'
    serviceDivNotes[3].innerHTML = 'የስኳር እና የደም ግፊት ታካሚዎች ክትትል'
    serviceDivNotes[4].innerHTML = 'የዐይን ፎሮፎር እና ድርቀት ህክምና'
    serviceDivNotes[5].innerHTML = 'የዐይን መነጸር መለካትና መግጠም እና የዖይን ጤና አጠባበቅ ምክር አገልግሎት'

}

function changeLang(){
    if (langCounter == 0){
        toOromigna()
        langCounter++
    } else {
        toAmharic()
        langCounter = 0
    }
}

