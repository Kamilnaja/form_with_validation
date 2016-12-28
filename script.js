$("#main-form").validate({
  rules: {
    name: "required",
    number: {
      required: true,
      number: true
    },
    email: {
      required: true,
      email: true
    },
    message: {
      required: true,
      rangelength: [2, 5000]
    }
  }
});