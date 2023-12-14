import React from "react";
import { Accordion } from "react-bootstrap";
import { FaQuestion } from "react-icons/fa";
function Fqas() {
  return (
    <div className="conponent p-5">
      <div className="text-center mb-5 p-5">
        <h4 className="mb-4">
          Do You Have Questions{" "}
          <span className="fs-1 text-primary">
            <FaQuestion />
          </span>
        </h4>
        <div className="mb-5">
          <p>
            Absolutely! If you have specific questions related to a food
            ordering website, feel free to ask, and I'll do my best to provide
            detailed answers. Whether it's about the ordering process, payment
            methods, delivery options, or any other aspect of a food ordering
            system, I'm here to help!
          </p>
        </div>
      </div>
      <Accordion defaultActiveKey="0">
        <h5 className="text-center my-4">Ordering Process</h5>
        <Accordion.Item eventKey="0">
          <Accordion.Header>How do I place an order?</Accordion.Header>
          <Accordion.Body>
            To place an order, simply browse our menu, select the items you'd
            like, and add them to your cart. Once you're ready, proceed to
            checkout, provide your delivery details, and complete the payment.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header>Is there a minimum order amount?</Accordion.Header>
          <Accordion.Body>
            Yes, there is a minimum order amount, which may vary based on your
            location. The minimum order requirement will be displayed during the
            checkout process.
          </Accordion.Body>
        </Accordion.Item>
        <h5 className="text-center my-4">Menu and Dishes</h5>
        <Accordion.Item eventKey="3">
          <Accordion.Header> How often is the menu updated?</Accordion.Header>
          <Accordion.Body>
            We strive to update our menu regularly to offer fresh and seasonal
            items. Check back frequently for the latest additions and changes.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="4">
          <Accordion.Header>
            Are prices inclusive of taxes and delivery fees?
          </Accordion.Header>
          <Accordion.Body>
            Prices listed on the menu are exclusive of taxes and delivery fees.
            These will be added during the checkout process.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="5">
          <Accordion.Header>
            Can I customize my order (e.g., special instructions, dietary
            preferences)?
          </Accordion.Header>
          <Accordion.Body>
            yes, you can customize your order. During the checkout process, you
            can add special instructions or specify dietary preferences in the
            provided fields.
          </Accordion.Body>
        </Accordion.Item>
        <h5 className="text-center my-4">Payment and Billing</h5>
        <Accordion.Item eventKey="6">
          <Accordion.Header>
            What payment methods are accepted?
          </Accordion.Header>
          <Accordion.Body>
            We accept various payment methods, including credit cards, debit
            cards, and online payment services. All transactions are processed
            securely.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="7">
          <Accordion.Header>
            Is the online payment process secure?
          </Accordion.Header>
          <Accordion.Body>
            Absolutely. We use industry-standard encryption to secure your
            payment information. Your financial details are transmitted
            securely, ensuring a safe transaction.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="8">
          <Accordion.Header>How are refunds handled?</Accordion.Header>
          <Accordion.Body>
            Refund requests are assessed on a case-by-case basis. If you
            encounter any issues with your order, please contact our customer
            support for assistance.
          </Accordion.Body>
        </Accordion.Item>
        <h5 className="text-center my-4">Delivery and Pickup</h5>
        <Accordion.Item eventKey="9">
          <Accordion.Header>What are the delivery options?</Accordion.Header>
          <Accordion.Body>
            We offer both standard and express delivery options. You can choose
            your preferred delivery time during the checkout process.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="10">
          <Accordion.Header>
            How is the delivery fee calculated?
          </Accordion.Header>
          <Accordion.Body>
            The delivery fee is calculated based on your delivery location and
            the chosen delivery option. The exact fee will be displayed before
            you confirm your order.
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
}

export default Fqas;
