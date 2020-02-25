import Vue from 'vue';

export const loadData = ({commit}) => {
    Vue.http.get('data.json')
        .then(res => res.json())
        .then(data => {
            if(data){
                const {
                    stocks,
                    stockPortfolio,
                    funds} = data;

                const portfolio = {
                    stockPortfolio,
                    funds
                };
                console.log(data);
                commit('SET_STOCKS', stocks);
                commit('SET_PORTFOLIO', portfolio);
            }
        })
}
