
function Contact({ id, name, phone, onDelete}) {

  return (
    <div>
      <p>
        {`${id}. Name: ${name}; Tel: ${phone} `}
        <button onClick={() => onDelete(id)}>Delete</button>
        </p>
    </div>
  );
}

export default Contact;