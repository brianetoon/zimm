<template>
  <div id="promo">
      <div class="one">
            <p class="grey--text text--darken-2 grey-sub">Tired of emptying the dirty canister and cleaning the filter?</p>
            <div class="img-one">
                <img src="../assets/zimm-kneeling.png" alt="zimm-kneel" class="zimm-kneel">
            </div>
            <p class="blue-sub">TRADE IN YOUR OLD CENTRAL VAC UNIT.</p>
            <p class="grey--text text--darken-2 grey-sub">Enjoy the convenience of a disposable bag. NO fuss, NO mess, NO tune-up needed!</p>
      </div>
      <div class="two">
            <div class="img-two">
                <img src="../assets/zimm-standing.png" alt="zimm-stand" class="zimm-stand">
            </div>
      </div>
      <div class="three">
          <p class="grey--text text--darken-2 grey-sub">Get all the cleaning and health benefits that your central vacuum offers.</p>
          <p class="blue-sub">LIMITED TIME OFFER <br> Call now! 866-829-0021</p>
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
.zimm-kneel {
    width: 100%;
    max-width: 400px;
}
.zimm-stand {
    width: 100%;
    max-width: 350px;
}
.img-two,
.img-one {
    text-align: center;
}
.one {
    grid-area: one;
}
.two {
    grid-area: two;
}
.three {
    grid-area: three;
}
#promo {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-areas: 
        "one one two two"
        "three three three three"
    ;
}
.blue-sub {
    color: #0055a5;
    font-weight: bold;
    font-size: 18px;
    line-height: 1.2em;
}
.grey-sub {
    font-size: 18px;
    font-weight: 500;
    line-height: 1.3em;
}

@media screen and (min-width: 600px) {
    #promo {
        grid-template-areas: 
            "one one two two"
            "three three two two"
        ;
    }
    #promo p {
        font-size: 20px;
    }
}
@media screen and (min-width: 960px) {
    #promo p {
        font-size: 22px;
    }
}
@media screen and (min-width: 1200px) {
    #promo p {
        font-size: 23px;
    }
}
</style>