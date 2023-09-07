"use strict";(self["webpackChunkgame_hub"]=self["webpackChunkgame_hub"]||[]).push([[631],{1527:function(e,a,l){l.r(a),l.d(a,{default:function(){return k}});var t=l(6252);const o={class:"container-lg p-5 contactTemp"},s={class:"row justify-content-center rounded shadow gx-0 pt-5 px-0 pb-4 p-sm-5",style:{"background-color":"rgba(255, 255, 255, 0.5)","margin-bottom":"20px","margin-top":"50px"}},i={class:"container-lg gx-0 pt-5 px-4 pb-4 p-sm-5 contact"},n=(0,t._)("h2",{class:"mt-0 mx-2 pt-0 pt-md-0 pt-lg-0"},"Questions or Comments?",-1),r=(0,t._)("p",{class:"ms-1 mt-3 me-1 mb-4 pt-2 pb-2 mx-sm-0 ms-lg-4 mt-lg-4 me-lg-4 mb-lg-5 pt-lg-2 pb-lg-0 ms-xl-5 mt-xl-4 me-xl-5 mb-xl-5 pt-xl-2"},"Use this contact form to connect, share comments, or ask questions. All messages are welcomed and appreciated.",-1);function c(e,a,l,c,d,m){const u=(0,t.up)("SignUpForm");return(0,t.wg)(),(0,t.iD)("div",o,[(0,t._)("div",s,[(0,t._)("div",i,[n,r,(0,t.Wm)(u)])])])}var d=l(9963);const m={class:"Cform px-0 px-lg-5"},u={class:"input-group mb-4"},p=(0,t._)("label",{class:"visually-hidden",for:"autoSizingInput"},"Name",-1),v={class:"input-group mb-4"},g=(0,t._)("span",{class:"input-group-text py-2",id:"basic-addon1"},"@",-1),b={class:"input-group mb-2"},h=(0,t._)("span",{class:"input-group-text text-start py-4"},[(0,t.Uk)("Your"),(0,t._)("br"),(0,t.Uk)("Message")],-1),y=(0,t._)("button",{class:"btn btn-primary btn-lg shadow-sm px-5 mt-5",type:"submit"},[(0,t._)("i",{class:"bi bi-send me-2 pe-1"}),(0,t.Uk)("Submit")],-1);function w(e,a,l,o,s,i){return(0,t.wg)(),(0,t.iD)("form",{onSubmit:a[3]||(a[3]=(0,d.iM)(((...e)=>i.submitForm&&i.submitForm(...e)),["prevent"]))},[(0,t._)("div",m,[(0,t._)("div",u,[p,(0,t.wy)((0,t._)("input",{id:"name","onUpdate:modelValue":a[0]||(a[0]=e=>s.name=e),type:"text",required:"",class:"form-control py-2",placeholder:"Username"},null,512),[[d.nr,s.name]])]),(0,t._)("div",v,[g,(0,t.wy)((0,t._)("input",{id:"email","onUpdate:modelValue":a[1]||(a[1]=e=>s.email=e),type:"email",required:"",class:"form-control",placeholder:"Email","aria-label":"Email","aria-describedby":"basic-addon1"},null,512),[[d.nr,s.email]])]),(0,t._)("div",b,[h,(0,t.wy)((0,t._)("textarea",{id:"message","onUpdate:modelValue":a[2]||(a[2]=e=>s.message=e),required:"",class:"form-control","aria-label":"With textarea"},null,512),[[d.nr,s.message]])])]),y],32)}var x={data(){return{name:"",email:"",message:""}},methods:{submitForm(){console.log(this.name,this.email,this.message)}}},f=l(3744);const T=(0,f.Z)(x,[["render",w]]);var A=T,C={components:{SignUpForm:A}};const _=(0,f.Z)(C,[["render",c]]);var k=_},6683:function(e,a,l){l.r(a),l.d(a,{default:function(){return X}});var t=l(6252),o=l(3174),s=l(9092);const i={class:"container-lg ps-5 pe-5 pt-0 pt-md-3 pt-lg-4 pb-5"},n={class:"container-lg pb-2 pb-md-4 pb-lg-5 gx-0"},r=(0,t.uE)('<h2 class="mt-5 mx-2 mb-4 mb-md-5 pb-2 pb-md-0 pt-4 pt-md-5">Q and A About This Game</h2><div class="accordion mb-5" id="accordionExample"><div class="accordion-item"><h2 class="accordion-header"><button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne"> Q: What is the goal of Tic Tac Toe? </button></h2><div id="collapseOne" class="accordion-collapse collapse show" data-bs-parent="#accordionExample"><div class="accordion-body"><strong>A: The main goal of Tic Tac Toe</strong> is to get 3 of your symbols (either X&#39;s or O&#39;s) in a row - horizontally, vertically, or diagonally across the 3x3 grid. To win, you need to form a full line with your symbol before your opponent can make their own line. The first player to complete a full row of 3 X&#39;s or 3 O&#39;s wins the game. <code>.accordion-body</code></div></div></div><div class="accordion-item"><h2 class="accordion-header"><button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo"> Q: How many players can play Tic Tac Toe at once? </button></h2><div id="collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionExample"><div class="accordion-body"><strong>A: Tic Tac Toe is specifically designed as a two-player game.</strong> The 3x3 grid board and alternating turn mechanics are optimized for just two opponents competing head-to-head. This one-on-one setup is integral to Tic Tac Toe&#39;s game flow and strategy. </div></div></div><div class="accordion-item"><h2 class="accordion-header"><button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree"> Q: Can Tic Tac Toe end in a draw? </button></h2><div id="collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionExample"><div class="accordion-body"><strong>A: Yes, it is possible</strong> for a game of Tic Tac Toe to end in a draw or tie. This occurs any time neither player successfully gets 3 X&#39;s or O&#39;s in a row by the time the entire 3x3 grid is filled up with played moves. <br><br> For a draw to happen, both players have to play defensively enough to block each other from making a winning line of 3 symbols. When all 9 squares contain either an X or O without a winner, then there are no more possible moves left to change the outcome. </div></div></div></div><h2 class="mt-5 mx-2 pt-4 pt-md-4 pt-lg-5">Continue Your Gaming Experience</h2><p class="ms-1 mt-3 me-1 mb-1 pt-2 mx-sm-0 ms-lg-4 mt-lg-4 me-lg-4 mb-lg-1 pt-lg-2 pb-lg-2 ms-xl-5 mt-xl-4 me-xl-5 mb-xl-1 pt-xl-2">You just sharpened your strategic thinking here. Now take on games that test new abilities, from split-second reflexes in Reaction Timer to depending on fortune in the classic War card game. The fun never stops, so challenge your mind with these next. </p><div class="row g-0 mt-5"><div class="col-sm-6 mb-3 mb-sm-0"><div class="card col2games bg-light p-1 p-md-2 p-lg-3 p-xl-4 border-light rounded-0"><h4 class="card-title mb-2 mt-4 pt-3 fw-bold">War Card Game</h4><div class="card-body m-2"><video class="w-100 h-100 top-0 start-0 rounded" style="position:relative;" autoplay loop muted><source src="'+o+'" type="video/mp4"> Your browser does not support the video tag. </video><p class="card-text ms-1 mt-3 me-1 mb-1 pt-2 mx-sm-0 ms-lg-4 mt-lg-4 me-lg-4 mb-lg-1 pt-lg-2 ms-xl-5 mt-xl-4 me-xl-5 mb-xl-1 pt-xl-2">Experience the excitement of the classic card game War. Test your luck and strategy.</p><a href="#" class="btn btn-outline-primary m-4 px-5 shadow-sm"><i class="bi bi-caret-right-fill me-1"></i>Play</a></div></div></div><div class="col-sm-6"><div class="card col2games1 p-1 p-md-2 p-lg-3 p-xl-4 border-light rounded-0"><h4 class="card-title mb-2 mt-4 pt-3 fw-bold">Reaction Timer</h4><div class="card-body m-2"><video class="w-100 h-100 top-0 start-0 rounded" style="position:relative;" autoplay loop muted><source src="'+s+'" type="video/mp4"> Your browser does not support the video tag. </video><p class="card-text ms-1 mt-3 me-1 mb-1 pt-2 mx-sm-0 ms-lg-4 mt-lg-4 me-lg-4 mb-lg-1 pt-lg-2 ms-xl-5 mt-xl-4 me-xl-5 mb-xl-1 pt-xl-2">Test your reaction time. Challenge friends and colleagues to beat your score!</p><a href="#" class="btn btn-outline-primary m-4 px-5 shadow-sm"><i class="bi bi-caret-right-fill me-1"></i>Play</a></div></div></div></div>',5);function c(e,a,l,o,s,c){const d=(0,t.up)("TicTacToe");return(0,t.wg)(),(0,t.iD)("div",i,[(0,t._)("div",n,[(0,t._)("div",null,[(0,t._)("div",null,[(0,t.Wm)(d)])]),r])])}var d=l(3577),m=l(9963),u=l.p+"img/X.cd652969.png",p=l.p+"img/O.7ae15c19.png";const v={class:"row justify-content-center rounded shadow gx-0 p-4 p-sm-5",style:{"background-color":"rgba(255, 255, 255, 0.5)","margin-bottom":"20px","margin-top":"60px"}},g={class:"col-md-4 outerCLMN",style:{"background-image":"linear-gradient( 140deg,  rgba(228,247,255,1) 21.9%, rgba(255,216,194,1) 92.2% )"}},b={class:"TicTacToecolumn"},h=(0,t._)("p",{style:{"margin-bottom":"0.5rem"}},"Welcome to",-1),y=(0,t._)("p",{class:"h2 TicTacToeh2",style:{"font-family":"'Bangers', cursive"}},"Tic Tac Toe",-1),w={style:{"font-style":"italic"}},x={class:"instructionsGo"},f={class:"col-md-8 bg-light outerCLMN1"},T={class:"TicTacToecolumn1 p-5 rounded"},A={class:"tile-container"},C=["onClick"],_={key:0,src:u,alt:"X",class:"fade-in shine",style:{width:"5.5vw",height:"5.5vw",transform:"skew(-5deg)"}},k={key:1,src:p,alt:"O",class:"fade-in shine",style:{width:"5.5vw",height:"5.5vw",transform:"skew(-5deg)"}};function O(e,a,l,o,s,i){return(0,t.wg)(),(0,t.iD)("div",v,[(0,t._)("div",g,[(0,t._)("div",b,[(0,t._)("div",null,[h,y,(0,t._)("p",w,(0,d.zw)(o.handleMessage()),1),(0,t._)("p",x,(0,d.zw)(o.originalText),1),(0,t.wy)((0,t._)("button",{class:"btn btn-outline-primary btn-md shadow-sm mt-2",style:(0,d.j5)([{"padding-left":"2.2em","padding-right":"2.2em",opacity:"0.3","pointer-events":"none"},{opacity:""!==o.gameOver?"1":"0.3",pointerEvents:""!==o.gameOver?"auto":"none"}]),onClick:a[0]||(a[0]=e=>o.handleReset())}," Reset? ",4),[[m.F8,!0]])])])]),(0,t._)("div",f,[(0,t._)("div",T,[(0,t._)("div",A,[((0,t.wg)(!0),(0,t.iD)(t.HY,null,(0,t.Ko)(o.tics,((e,a)=>((0,t.wg)(),(0,t.iD)("div",{key:a,onClick:e=>o.handleClick(a),class:"tiles"},["One"===e?((0,t.wg)(),(0,t.iD)("img",_)):"Two"===e?((0,t.wg)(),(0,t.iD)("img",k)):(0,t.kq)("",!0)],8,C)))),128))])])])])}var B=l(2262),W={setup(){const e=(0,B.iH)({aA:"",aB:"",aC:"",bA:"",bB:"",bC:"",cA:"",cB:"",cC:""}),a=(0,B.iH)("One"),l=(0,B.iH)(""),t=(0,B.iH)("Click on empty square"),o=()=>{e.value={aA:"",aB:"",aC:"",bA:"",bB:"",bC:"",cA:"",cB:"",cC:""},a.value="One",l.value="",t.value="Click on empty square"},s=()=>{const o=Object.values(e.value).filter((e=>""===e));0===o.length&&(l.value="No Winner"),e.value.aA&&e.value.aA===e.value.aB&&e.value.aA===e.value.aC&&(l.value=a.value),e.value.bA&&e.value.bA===e.value.bB&&e.value.bA===e.value.bC&&(l.value=a.value),e.value.cA&&e.value.cA===e.value.cB&&e.value.cA===e.value.cC&&(l.value=a.value),e.value.aA&&e.value.aA===e.value.bA&&e.value.aA===e.value.cA&&(l.value=a.value),e.value.aB&&e.value.aB===e.value.bB&&e.value.aB===e.value.cB&&(l.value=a.value),e.value.aC&&e.value.aC===e.value.bC&&e.value.aC===e.value.cC&&(l.value=a.value),e.value.aA&&e.value.aA===e.value.bB&&e.value.aA===e.value.cC&&(l.value=a.value),e.value.cA&&e.value.cA===e.value.bB&&e.value.cA===e.value.aC&&(l.value=a.value),l.value&&(t.value="Game over")},i=t=>{l.value||""===e.value[t]&&(e.value[t]=a.value,s(),l.value||(a.value="One"===a.value?"Two":"One"))},n=()=>"No Winner"===l.value?"All tics are tacked, but no winner!":"One"===l.value||"Two"===l.value?`Player ${a.value} wins!`:`It is player ${"One"===a.value?"X":"O"}'s turn.'`;return{tics:e,player:a,gameOver:l,handleReset:o,handleClick:i,handleMessage:n,originalText:t}}},E=l(3744);const U=(0,E.Z)(W,[["render",O]]);var q=U,D={name:"App",components:{TicTacToe:q}};const F=(0,E.Z)(D,[["render",c]]);var X=F}}]);
//# sourceMappingURL=contact.b3bc106e.js.map