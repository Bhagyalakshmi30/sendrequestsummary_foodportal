import React, { useContext, useState } from 'react';

import Summarylogo from '../Images/summarylogo.png';

import Logo from '../Images/logo.png';
import './RequestSummary.css';


import { Link } from 'react-router-dom';

function RequestSummary() {



    return (
        <>
            <div>
                <nav>
                    <img src={Logo} className="logoheader" alt="headerImage" />
                </nav>
            </div>

            <div className='bodyofsummary'>
                {/* LOGO AND HEADING */}
                <div className='logoandheadingsummary'>
                    <img src={Summarylogo} alt="summary" />   <h3><b className='Summarytext'>Summary</b></h3>
                </div>

                {/* ORDER DETAILS INFORMATION */}

                <div className='orderdetailsinsummary'>

                    <div className='information1' style={{ display: 'flex' }} >
                        <div className='Informationinsummary'>
                            Order ID: <b>E0001234</b>
                        </div>
                        <div className='Informationinsummary' >
                            Delivery Date: <b>Thu, 18 Aug 2022</b>
                        </div>
                    </div>

                    <div className='information2' style={{ display: 'flex' }}>
                        <div className='Informationinsummary' >
                            Time: <b>11.00 am - 12.00 pm</b>
                        </div>
                        <div className='Informationinsummary' >
                            Total Head Count: <b>25</b>
                        </div>
                    </div>
                </div>

                {/* CONTACT DETAILS TEXTBOXES */}
                <div className='contactdetailsinsummary'>
                    <span className='ContactTextinSummary'>Contact Details</span>

                    <div className="inputdetail">
                        <div className="rowsininputdetails">
                            <div className="input-container-summary">
                                <label for="full-name">Full Name<span class="required">*</span>:</label>
                                <input type="text" id="full-name" required />
                            </div>
                            <div className="input-container-summary">
                                <label for="email">Email ID<span class="required">*</span>:</label>
                                <input type="email" id="email" required />
                            </div>
                            <div className="input-container-summary">
                                <label for="contact-number">Contact Number<span class="required">*</span>:</label>
                                <input type="tel" id="contact-number" required />
                            </div>
                        </div>
                        <div className="delivery-address-summary">
                            <label for="delivery-address">Delivery Address<span class="required">*</span>:</label>
                            <textarea rows="4" id="delivery-address" required></textarea>
                        </div>
                    </div>
                </div>


                {/* Tables for order and billing */}
                <div className='tablesinsummary'>

                    <div className='orderdetailstableinsummary'>
                        <span className='ordertextinsummary'>Order Details</span>
                        <table class="order-details-table">
                            <thead className='tableheaderinsummary'>
                                <tr className='tableheadertextinsummary'>
                                    <th>Items</th>
                                    <th>Qty</th>
                                    <th>Plate</th>
                                    <th>Amount</th>
                                </tr>
                            </thead >
                            <tbody className='tablebodyinsummary'>
                                <td>1</td>
                                <td>1</td>
                                <td>1</td>
                                <td>1</td>

                            </tbody>
                            <tbody className='tablebodyinsummary'>
                                <td>1</td>
                                <td>1</td>
                                <td>1</td>
                                <td>1</td>

                            </tbody>
                            <tbody className='tablebodyinsummary'>
                                <td>1</td>
                                <td>1</td>
                                <td>1</td>
                                <td>1</td>

                            </tbody>
                        </table>
                    </div>

                    <div className='billingdetailstableinsummary'>
                        <span className='billingtextinsummary'>Billing Details</span>
                        <table class="billing-details-table">
                            <thead className='tableheaderinsummary'>
                                <tr >
                                    <th className='tableheadertextinsummary'>Payable Summary</th>
                                </tr>
                            </thead>
                            <tbody className='tablebodyinsummary'>
                                <td>1</td>
                            </tbody>
                            <tbody className='tablebodyinsummary'>
                                <td>1</td>
                            </tbody>
                            <tbody className='tablebodyinsummary'>
                                <td>1</td>
                            </tbody>
                        </table>

                    </div>

                </div>


                {/* FOOTER */}
                <div className="footerforsummary">
                    <button className='backbuttoninsummary'> {'<'} Back</button>

                    <button className='sendrequestbuttoninsummary'>Send Request {'>'}</button>
                    
                </div>


            </div>




        </>
    );
}

export default RequestSummary;


