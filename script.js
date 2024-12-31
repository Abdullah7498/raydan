
document.addEventListener("DOMContentLoaded", function () {
    const steps = document.querySelectorAll(".step");
    const formSteps = document.querySelectorAll(".form-step");
    const nextBtns = document.querySelectorAll(".next-btn");
    const prevBtns = document.querySelectorAll(".prev-btn");

    let currentStep = 0;

    function updateSteps() {
        steps.forEach((step, index) => {
            step.classList.toggle("active", index <= currentStep);
        });

        formSteps.forEach((formStep, index) => {
            formStep.classList.toggle("active", index === currentStep);
        });
    }

    nextBtns.forEach((btn) => {
        btn.addEventListener("click", () => {
            currentStep = Math.min(currentStep + 1, steps.length - 1);
            updateSteps();
        });
    });

    prevBtns.forEach((btn) => {
        btn.addEventListener("click", () => {
            currentStep = Math.max(currentStep - 1, 0);
            updateSteps();
        });
    });

    updateSteps();

});
document.addEventListener("DOMContentLoaded", () => {
    fetch('../components/inquiries.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('inq-placeholder').innerHTML = data;
        });
    fetch('../components/footer.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('footer-placeholder').innerHTML = data;
        });
    fetch('../components/navbar.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('navbar-placeholder').innerHTML = data;
        });
})
window.onload = () => {
    const language = localStorage.getItem("language") || 'en';
    switchLanguage(language);
};


async function switchLanguage(lang) {
    localStorage.setItem("language", lang);
    const language = localStorage.getItem('language');
    const inquiriesSection = document.getElementById('inquiries-section');
    const footer = document.getElementById('footer');

    const response = await fetch(`../${lang}.json` || `${lang}.json`);
    const data = await response.json();
    console.log(data);

    const path = window.location.pathname;
    let pathUrl = path.split('/components/')[1];;

    document.getElementById('lang-switcher').innerText = lang === "ar" ? "العربية" : "English";
    document.getElementById('nv-nmber').innerText = data.nv_nmber;
    document.getElementById('nv-search').placeholder = data.nv_search;
    const main_nav = document.getElementById('nav_main_list');
    main_nav.querySelectorAll(':scope > li').forEach((node) => {
        const directLinks = node.querySelectorAll(':scope > a');
        directLinks.forEach((item) => {
            const id = item.getAttribute('id');
            item.innerText = data[id];
        });
    });


    const list = document.getElementById('main_list1_list');
    list.querySelectorAll('li').forEach((node) => {
        node.querySelectorAll('a').forEach((item) => {
            const id = item.getAttribute('id');
            item.innerText = data[id];
        });

    })
    const list2 = document.getElementById('main_list2_list');
    list2.querySelectorAll('li').forEach((node) => {
        node.querySelectorAll('a').forEach((item) => {
            const id = item.getAttribute('id');
            item.innerText = data[id];
        });

    })
    const list3 = document.getElementById('main_list4_list');
    list3.querySelectorAll('li').forEach((node) => {
        node.querySelectorAll('a').forEach((item) => {
            const id = item.getAttribute('id');
            item.innerText = data[id];
        });

    })
    const list4 = document.getElementById('main_list6_list');
    list4.querySelectorAll('li').forEach((node) => {
        node.querySelectorAll('a').forEach((item) => {
            const id = item.getAttribute('id');
            item.innerText = data[id];
        });

    })
    const list5 = document.getElementById('main_list7_list');
    list5.querySelectorAll('li').forEach((node) => {
        node.querySelectorAll('a').forEach((item) => {
            const id = item.getAttribute('id');
            item.innerText = data[id];
        });

    })


    inquiriesSection.querySelectorAll('h2, p,a,h3,input,button ').forEach((node) => {
        const id = node.getAttribute('id');
        if (node.tagName === 'INPUT') {
            node.setAttribute('placeholder', data[id]);
        }
        if (node.tagName === 'BUTTON') {
            node.innerText = data[id];
        }
        if (id && data[id]) {
            node.innerText = data[id];
        }
    });

    footer.querySelectorAll('p,span').forEach((node) => {
        const id = node.getAttribute('id');
        if (id && data[id]) {
            if (id === "download_our_app") { node.style.setProperty('text-align', 'right', 'important'); }
            node.innerText = data[id];
        }
    });

    if (language === "ar") {
        document.querySelectorAll(".box-color").forEach(function (element) {
            element.style.display = 'none';
        });
    }


    if (path === '/') {
        const omn = document.getElementById('omvm');
        const investCards = document.getElementById('invest-cards');
        const menuList = document.getElementById('menu-list');
        document.getElementById('ch').innerText = data.ch;
        document.getElementById('ch-p1').innerText = data.ch_p1;
        document.getElementById('ch-p2').innerText = data.ch_p2;
        document.getElementById('ch-p3').innerText = data.ch_p3;
        document.getElementById('ch-p4').innerText = data.ch_p4;
        document.getElementById('km-gkm').innerText = data.get_to_know_us;
        document.getElementById('km-ar').innerText = data.about_redan;
        document.getElementById('fm').innerText = data.family_sessions;
        document.getElementById('ancwr').innerText = data.are_not_complete;
        document.getElementById('download_our_app').innerText = data.download_our_app;
        document.getElementById('get_offers').innerText = data.get_offers;
        document.getElementById('menu').innerText = data.menu;
        document.getElementById('load_more').innerText = data.load_more;
        omn.querySelectorAll('h1, h2, h3, h4, h5, h6, p').forEach((node) => {
            const id = node.getAttribute('id');
            if (id && data[id]) {
                node.innerText = data[id];
            }
        });

        investCards.querySelectorAll('p,a,h2').forEach((node) => {
            const id = node.getAttribute('id');
            if (id && data[id]) {
                node.innerText = data[id];
            }
        });

        menuList.querySelectorAll('li').forEach((node) => {
            const id = node.getAttribute('id');
            if (id && data[id]) {
                node.innerText = data[id];
            }
        });
    }

    if (pathUrl === "companyhistory.html") {
        const companyhistory = document.getElementById("cmp");
        companyhistory.querySelectorAll("h2,p").forEach((entry) => {
            const id = entry.getAttribute('id');
            if (id && data[id]) {
                entry.innerText = data[id];
            }
        });
    }

    if (pathUrl === "ourmessage.html") {
        const omn = document.getElementById('omvm');
        const companyObjective = document.getElementById('cmp')
        const list = document.getElementById('company_objective_list');
        list.querySelectorAll('li').forEach((entry) => {
            const id = entry.getAttribute('id');
            if (id && data[id]) {
                entry.innerText = data[id];
            }
        });

        omn.querySelectorAll('h1, h2, h3, h4, h5, h6, p').forEach((node) => {
            const id = node.getAttribute('id');
            if (id && data[id]) {
                node.innerText = data[id];
            }
        });
        companyObjective.querySelectorAll('h2,p').forEach((node) => {
            const id = node.getAttribute('id')
            if (id && data[id]) {
                node.innerText = data[id];
            }
        })

    }

    if (pathUrl === 'awards.html') {
        const awardImg = document.getElementById('award_img')
        if (language === 'ar') {
            awardImg.style.setProperty('left', '1px', 'important');
            awardImg.classList.remove('end-0')
        }
        const awards = document.getElementById('awards');
        awards.querySelectorAll('h1,h3, p').forEach((entry) => {
            const id = entry.getAttribute('id');
            if (id && data[id]) {
                entry.innerText = data[id];
            }
        });

    }

    if (pathUrl === 'qualityfoods.html') {
        const qualityFoods = document.getElementById('quality');
        const q_img_1 = document.getElementById('q_img_1');
        const q_img_2 = document.getElementById('q_img_2');
        const list = document.getElementById('quality_system_list');
        list.querySelectorAll('li').forEach((entry) => {
            const id = entry.getAttribute('id');
            if (id && data[id]) {
                entry.innerText = data[id];
            }
        });
        if (language === 'ar') {
            q_img_1.classList.add('text-start');
            q_img_2.classList.add('text-start');
            q_img_1.classList.remove('text-end');
            q_img_2.classList.remove('text-end');

        }
        qualityFoods.querySelectorAll('h1,h2,p,h3,h4').forEach((entry) => {
            const id = entry.getAttribute('id');
            if (id && data[id]) {
                entry.innerText = data[id];
            }
        });
    }

    if (pathUrl === 'different.html') {
        const different = document.getElementById('different');
        const list = document.getElementById('buisiness_model_list');
        const images = document.querySelectorAll('#diff_img');
        images.forEach((image) => {
            if (image.classList.contains('text-end')) {
                image.classList.remove('text-end');
                image.classList.add('text-start');
            } else {
                image.classList.remove('text-start');
                image.classList.add('text-end');
            }
        });
        list.querySelectorAll('li').forEach((entry) => {
            const id = entry.getAttribute('id');
            if (id && data[id]) {
                entry.innerText = data[id];
            }
        });
        different.querySelectorAll('h1,h2,p,h4').forEach((entry) => {
            const id = entry.getAttribute('id');
            if (id && data[id]) {
                entry.innerText = data[id];
            }
        });

    }

    if (pathUrl === 'responsibility.html') {
        const responsibility = document.getElementById('responsibility');
        const img = document.getElementById('img');
        if (language === 'ar') {
            img.classList.add('text-start');
            img.classList.remove('text-end');
        }
        responsibility.querySelectorAll('p,h4').forEach((entry) => {
            const id = entry.getAttribute('id');
            if (id && data[id]) {
                entry.innerText = data[id];
            }
        });

    }

    if (pathUrl === 'subsistence.html') {
        const responsibility = document.getElementById('responsibility');
        responsibility.querySelectorAll('h1,h2,p,h3,h4').forEach((entry) => {
            const id = entry.getAttribute('id');
            if (id && data[id]) {
                entry.innerText = data[id];
            }
        });
    }

    if (pathUrl === 'paties&banquet.html') {
        const patiesbanquet = document.getElementById('paties_banquet');
        const list = document.getElementById('outdoor_parties_list');
        const images = document.querySelectorAll('#pq_img');
        list.querySelectorAll('li').forEach((entry) => {
            const id = entry.getAttribute('id');
            if (id && data[id]) {
                entry.innerText = data[id];
            }
        });
        images.forEach((image) => {
            if (image.classList.contains('text-end')) {
                image.classList.remove('text-end');
                image.classList.add('text-start');
            } else {
                image.classList.remove('text-start');
                image.classList.add('text-end');
            }
        });
        patiesbanquet.querySelectorAll('h4,p').forEach((image) => {
            const id = image.getAttribute('id');
            if (id && data[id]) {
                image.innerText = data[id];
            }
        });
    }

    if (pathUrl === 'menu.html') {
        document.getElementById('menu').innerText = data.menu;
        document.getElementById('load_more').innerText = data.load_more;
        const menuList = document.getElementById('menu-list');
        const menuItems = menuList.querySelectorAll('li');
        menuItems.forEach((menuItem) => {
            const id = menuItem.getAttribute('id');
            if (id && data[id]) {
                menuItem.innerText = data[id];
            }
        });
    }

    if (pathUrl === "news.html") {
        console.log("news.html");

        document.getElementById('most_imp_achievements').innerText = data.most_imp_achievements;
        document.getElementById('most_imp_achievements_p').innerText = data.most_imp_achievements_p
        const news = document.getElementById('news');
        const image = document.querySelector('#news_img');
        if (language === 'ar') {
            image.classList.add('text-start');
            image.classList.remove('text-end');
        }
        news.querySelectorAll('div,p,h4,h3').forEach((entry) => {
            const id = entry.getAttribute('id');
            if (id && data[id]) {
                entry.innerText = data[id];
            }
        });

    }

    if (pathUrl === 'company.html') {
        const company = document.getElementById('company');
        const company_img = document.getElementById('img');
        if (language === 'ar') {
            company_img.classList.add('text-start');
            company_img.classList.remove('text-end');
        }
        else if (language === 'en') {
            company_img.classList.remove('text-start');
            company_img.classList.add('text-end');
        }
        company.querySelectorAll('h1,h2,p,h3,h4').forEach((entry) => {
            const id = entry.getAttribute('id');
            if (id && data[id]) {
                entry.innerText = data[id];
            }
        });
    }

    if (pathUrl === 'contact.html') {
        const contact = document.getElementById('contact');
        contact.querySelectorAll('h1,h2,p,h3,h4,input,button,b,span,a,h5,textarea').forEach((entry) => {
            const id = entry.getAttribute('id');
            if (entry.tagName === 'INPUT') {
                entry.setAttribute('value', data[id]);
            }
            if (entry.tagName === 'BUTTON') {
                entry.innerText = data[id];
            }
            if (id && data[id]) {
                entry.innerHTML = data[id];
            }
        });
    }

    if (pathUrl === 'joinus.html') {
        const joinus = document.getElementById('joinus');
        joinus.querySelectorAll('h1,h2,p,h3,h4,input,button,b,span,a,h5,textarea,label').forEach((entry) => {
            const id = entry.getAttribute('id');
            if (entry.tagName === 'INPUT') {
                entry.setAttribute('placeholder', data[id]);
            }
            if (entry.tagName === 'BUTTON') {
                entry.innerText = data[id];
            }
            if (id && data[id]) {
                entry.innerHTML = data[id];
            }
        });
    }

    if (pathUrl === 'customercare.html') {
        const customercare = document.getElementById('customercare');
        customercare.querySelectorAll('h1,h2,p,h3,h4,input,button,b,span,a,h5,textarea,label').forEach((entry) => {
            const id = entry.getAttribute('id');
            if (entry.tagName === 'INPUT') {
                entry.setAttribute('placeholder', data[id]);
            }
            if (entry.tagName === 'BUTTON') {
                entry.innerText = data[id];
            }
            if (id && data[id]) {
                entry.innerHTML = data[id];
            }
        });
    }

    if (pathUrl === 'suppliers.html') {
        const suppliers = document.getElementById('suppliers_main');
        suppliers.querySelectorAll('h1,h2,p,h3,h4,input,button,b,span,a,h5,textarea,label').forEach((entry) => {
            const id = entry.getAttribute('id');
            if (entry.tagName === 'INPUT') {
                entry.setAttribute('placeholder', data[id]);
            }
            if (entry.tagName === 'BUTTON') {
                entry.innerText = data[id];
            }
            if (id && data[id]) {
                entry.innerHTML = data[id];
            }
        });
    }



    document.documentElement.lang = lang;
    document.body.classList.toggle('rtl', lang === 'ar');
}

function removePath() {
    window.location.pathname = '/';
}