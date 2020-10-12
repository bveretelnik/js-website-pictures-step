const calc = (size,material,options,promocode,result)=>{
    const sizeBlock = document.querySelector(size),
        matirialBlock = document.querySelector(material),
        optionsBlock = document.querySelector(options),
        promocodeBlock = document.querySelector(promocode),
        resultBlock = document.querySelector(result);

        let sum = 0;

        const culcFunc = () =>{
            sum = Math.round((+sizeBlock.value)*(+matirialBlock.value)+(+optionsBlock.value));

            if(sizeBlock.value === '' || matirialBlock.value === ''){
                resultBlock.textContent = 'Pleace select the size and naterial picture'
            }else if(promocodeBlock.value === 'IWANTPOPART'){
                resultBlock.textContent = Math.round(sum*0.7)
            }else {
                resultBlock.textContent = sum;
            }
        };

        sizeBlock.addEventListener('change',culcFunc);
        matirialBlock.addEventListener('change',culcFunc);
        optionsBlock.addEventListener('change',culcFunc);
        promocodeBlock.addEventListener('input',culcFunc);

}

export default calc;