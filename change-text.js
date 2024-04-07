    // Get the button and content element
    const changeButton = document.getElementById('changeButton');
    const contentElement = document.getElementById('content');
    
    // Save original content
    const originalContent = contentElement.innerHTML;
    
    // Flag to keep track of state
    let changed = false;
  
    // Add event listener to the button
    changeButton.addEventListener('click', function() {
      if (!changed) {
        // Change content to new content
        contentElement.innerHTML = '<div class="main-frame">' +
          '<div class="main-frame_title" aria-hidden="true">Holocaust din România vs Germania</div>' +
          '<h1 class="main-frame_title main-frame_stroked-title">Holocaust din România vs Germania</h1>' +
          '</div>' +
          '<div id="wrapper">' +
          '<a href="#" class="my-super-cool-btn">' +
          '<div class="dots-container">' +
          '<div class="dot"></div>' +
          '<div class="dot"></div>' +
          '<div class="dot"></div>' +
          '<div class="dot"></div>' +
          '</div>' +
          '<span>' +
          '<div class="venn-diagram">' +
          '<div class="circle left"></div>' +
          '<div class="circle right"></div>' +
          '</div>' +
          '</span>' +
          '</a>' +
          '</div>' +
          '<div class="content">' +
          '<h4 style="font-size: 2em;font-weight: 700;border-bottom: 1px solid black;margin-bottom: 10px;">Asemănări:</h4>' +
          '<p><span style="margin-left: 20px;">1.<b> Discriminarea și segregarea:</b>  Atât în România, cât și în Germania, evreii au fost supuși la discriminare și segregare înainte de Holocaust. Ei au fost excluși din diferite aspecte ale vieții sociale și economice și li s-au impus legi antisemite care le-au limitat drepturile.</p>' +
          '<p><span style="margin-left: 20px;">2.<b> Politica genocidului:</b> În ambele țări, a fost adoptată o politică oficială de genocid împotriva evreilor. Aceasta a implicat confiscarea proprietăților lor, deportarea în lagăre de concentrare și exterminarea în masă.</p>' +
          '<p><span style="margin-left: 20px;">3.<b> Lagăre de concentrare și exterminare:</b> Atât în România, cât și în Germania, au existat lagăre de concentrare și exterminare unde evreii și alte grupuri etnice au fost închiși și omorâți în masă. Cele mai notabile exemple sunt Auschwitz în Germania și Transnistria în România.</p>' +
          '<h4 style="font-size: 2em;font-weight: 700;border-bottom: 1px solid black;margin-bottom: 10px;">Diferențe:</h4>' +
          '<img src="poze/holocasut-1">' +
          '<p><span style="margin-left: 20px;">1.<b> Magnitudinea:</b> Holocaustul din Germania a avut o magnitudine mult mai mare decât cel din România. În timp ce milioane de evrei au fost exterminați în lagărele de concentrare naziste, numărul victimelor în România a fost semnificativ mai mic.</p>' +
          '<p><span style="margin-left: 20px;">2.<b> Implicarea guvernului:</b> În Germania, Holocaustul a fost organizat și implementat de guvernul nazist, condus de Adolf Hitler și Partidul Nazist. În România, autoritățile au colaborat cu naziștii, dar au existat și acțiuni independente de persecuție antisemită, precum pogromurile din Iași și București.</p>' +
          '<p><span style="margin-left: 20px;">3.<b> Motivația:</b> Motivațiile pentru persecutarea evreilor au fost diferite în cele două țări. În Germania, antisemitismul era un element central al ideologiei naziste, în timp ce în România, persecuția evreilor a fost influențată și de alte motive politice și economice.</p>' +
          '<p><span style="margin-left: 20px;">4.<b> Reacția internațională</b>: Reacția comunității internaționale la Holocaustul din Germania a fost mult mai puternică și mai amplă decât la Holocaustul din România. Deși există critici legate de modul în care unele țări au răspuns la Holocaust, implicarea internațională și denunțarea masivă a atrocităților au fost caracteristici semnificative în cazul Germaniei, în timp ce România a evitat pe scară largă consecințele internaționale pentru rolul său în Holocaust.</p>' +
          '</div>';
        changed = true;
      } else {
        // Revert back to original content
        contentElement.innerHTML = originalContent;
        changed = false;
      }
    });