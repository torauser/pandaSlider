let rgbText = {
    red: 0,
    green: 0,
    blue: 0
}
let rgbBack = {
    red: 255,
    green: 255,
    blue: 255
}

$(document).ready(function () {

    $("#buttons").buttonset();
    $("#color,#back").button();

    $('.slider-red').slider({ max: 255 });
    $('.slider-green').slider({ max: 255 });
    $('.slider-blue').slider({ max: 255 });

    // возможность вернуться к уникальным настроенным rgb параметрам слайдера для текста и фона 

    $('#color').on('click', () => {
        $('.slider-red').slider({ value: rgbText.red })
        $('.slider-green').slider({ value: rgbText.green })
        $('.slider-blue').slider({ value: rgbText.blue })
    })
    $('#back').on('click', () => {
        $('.slider-red').slider({ value: rgbBack.red })
        $('.slider-green').slider({ value: rgbBack.green })
        $('.slider-blue').slider({ value: rgbBack.blue })
    })

    // логика слайдера

    $('.slider-red').slider({
        slide: (event, ui) => {
            if ($('#color').prop('checked')) {
                rgbText.red = ui.value;
                rgbText.green = $('.slider-green').slider('option', 'value');
                rgbText.blue = $('.slider-blue').slider('option', 'value');
                $('article').css({ 'color': `rgb(${rgbText.red}, ${rgbText.green}, ${rgbText.blue})` });
            }
            if ($('#back').prop('checked')) {
                rgbBack.red = ui.value;
                rgbBack.green = $('.slider-green').slider('option', 'value');
                rgbBack.blue = $('.slider-blue').slider('option', 'value');
                $('article').css({ 'background-color': `rgb(${rgbBack.red}, ${rgbBack.green}, ${rgbBack.blue})` });
            }
        }
    });
    $('.slider-green').slider({
        slide: (event, ui) => {
            if ($('#color').prop('checked')) {
                rgbText.red = $('.slider-red').slider('option', 'value');
                rgbText.green = ui.value;
                rgbText.blue = $('.slider-blue').slider('option', 'value');
                $('article').css({ 'color': `rgb(${rgbText.red}, ${rgbText.green}, ${rgbText.blue})` });
            }
            if ($('#back').prop('checked')) {
                rgbBack.red = $('.slider-red').slider('option', 'value');
                rgbBack.green = ui.value;
                rgbBack.blue = $('.slider-blue').slider('option', 'value');
                $('article').css({ 'background-color': `rgb(${rgbBack.red}, ${rgbBack.green}, ${rgbBack.blue})` });
            }
        }
    });
    $('.slider-blue').slider({
        slide: (event, ui) => {
            if ($('#color').prop('checked')) {
                rgbText.red = $('.slider-red').slider('option', 'value');
                rgbText.green = $('.slider-green').slider('option', 'value');
                rgbText.blue = ui.value;
                $('article').css({ 'color': `rgb(${rgbText.red}, ${rgbText.green}, ${rgbText.blue})` });
            }
            if ($('#back').prop('checked')) {
                rgbBack.red = $('.slider-red').slider('option', 'value');
                rgbBack.green = $('.slider-green').slider('option', 'value');
                rgbBack.blue = ui.value;;
                $('article').css({ 'background-color': `rgb(${rgbBack.red}, ${rgbBack.green}, ${rgbBack.blue})` });
            }
        }
    });
})

