import {select, templates} from '../settings.js';
import AmountWidget from './AmountWidget.js';

class Booking{
  constructor(bookWigdet){
    const thisBooking = this;

    thisBooking.render(bookWigdet);
    thisBooking.initWidgets();
        
  }

  render(bookWigdet){
    const thisBooking = this;

    const generatedHTML = templates.bookingWidget();

    thisBooking.dom = {},

    thisBooking.dom.wrapper = bookWigdet;
    thisBooking.dom.wrapper.innerHTML = generatedHTML;
    thisBooking.dom.peopleAmount = thisBooking.dom.wrapper.querySelector(select.booking.peopleAmount);
    thisBooking.dom.hoursAmount = thisBooking.dom.wrapper.querySelector(select.booking.hoursAmount);
    thisBooking.dom.datePicker = thisBooking.dom.wrapper.querySelector(select.widgets.datePicker.wrapper);


  }

  initWidgets(){
    const thisBooking = this;

    thisBooking.peopleAmount = new AmountWidget(thisBooking.dom.peopleAmount);

    thisBooking.hoursAmount = new AmountWidget(thisBooking.dom.hoursAmount);

    thisBooking.datePicker = new AmountWidget(thisBooking.dom.datePicker);


  }
}
export default Booking;