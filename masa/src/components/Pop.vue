<template>
    <div id="Pop-up" v-if="show">
        <div class="controller">
            <header>
                <span>提示框</span>
                <span @click="popUp(false,1)">X</span>
            </header>
            <main>
                <p>望能加入o(*////▽////*)q</p>
                <p>
                     进入:&nbsp; <a href="http://101.43.8.138:4001/">我的网站</a>&nbsp;&nbsp;
                    <a href="https://blog.csdn.net/qq_53701739/article/details/123194356?spm=1001.2014.3001.5502">我的CSDN</a>
                </p>
            </main>
            <footer>
                <div class="but" @click="popUp(false)">我知道啦！</div>
            </footer>
        </div>
    </div>
</template>
<script>
export default {
    name: "Pop",
    data() {
        return {
            show: false,
        };
    },
    methods: {
        popUp(bol,x) {
            this.show = bol ? true : false;
            if(x) document.title="ヾ|≧_≦|〃望能加入";
        },
    },
    mounted(){
        setTimeout(()=>this.show=true,4000)
    }
}
</script>

<style lang="less" scoped>
#Pop-up {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.3);
  z-index: 99999;
  .controller {
    position: absolute;
    top: 30%;
    left: 37%;
    width: 320px;
    height: 190px;
    background-color: white;
    box-shadow: 1px 1px 30px rgba(0, 0, 0, 0.3);
    header {
      box-sizing: border-box;
      height: 30%;
      padding: 3% 3%;
      user-select: none;
      span {
        display: block;
        font-size: 20px;
        color: #000;
      }
      span:nth-child(1) {
        float: left;
      }
      span:nth-child(2) {
        float: right;
        cursor: pointer;
      }
    }
    main {
      box-sizing: border-box;
      height: 40%;
      padding: 5% 14%;
      // line-height: 25px;
      color: #333;
      p:nth-child(2) {
        margin-top: 9px;
      }
    }
    footer {
      box-sizing: border-box;
      height: 30%;
      padding: 0 6%;
      .but {
        box-sizing: border-box;
        width: 30%;
        height: 71%;
        float: right;
        padding-top: 4%;
        padding-left: 1%;
        margin-top: 3%;
        background-color: rgb(30, 159, 255);
        text-align: center;
        color: white;
        cursor: pointer;
        user-select: none;
      }
    }
  }
}
</style>