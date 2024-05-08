import { Box, Button, Stack, TextField } from "@mui/material";
import Header from "../Components/Header";
import { useForm } from "react-hook-form";

const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  console.log(errors);
  return (
    <Box sx={{ my: "20px" }} id="contact">
      <Header title="Contact" subtitle="Contact Me" />
      <Stack
        width="70%"
        sx={{ mx: "auto" }}
        component="form"
        onSubmit={handleSubmit((data) => console.log(data))}
      >
        <Box display="flex" flexDirection="row" flexWrap="wrap" justifyContent="space-between">
          <TextField
            id="standard-basic"
            label="First Name"
            variant="filled"
            {...register("firstname", { required: "this field is required" })}
            helperText={errors.firstname?.message}
            error={!!errors.firstname}
            sx={{
              width: "calc(50% - 10px)",
              borderColor: "#F00",
              my: "10px",
            }}
          />
          <TextField
            id="filled-basic"
            label="Last Name"
            variant="filled"
            {...register("lastname", { required: "this field is required" })}
            helperText={errors.lastname?.message}
            error={!!errors.lastname}
            sx={{
              width: "calc(50% - 10px)",
              borderColor: "#F00",
              my: "10px",
            }}
          />
        </Box>
        <TextField
          id="filled-basic"
          label="Email"
          variant="filled"
          {...register("email", {
            required: "this field is required",
            pattern: {
              value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
              message: "Invalid Email",
            },
          })}
          helperText={errors.email?.message}
          error={!!errors.email}
          sx={{
            borderColor: "#F00",
            my: "10px",
          }}
        />
        <TextField
          id="filled-basic"
          label="Message"
          variant="filled"
          {...register("message", { required: "this field is required" })}
          helperText={errors.message?.message}
          error={!!errors.message}
          multiline
          rows={4}
          sx={{
            color: "#F00",
            my: "10px",
          }}
        />
        <Button variant="contained" type="submit" sx={{width: {xs: "100%" ,md:"150px"}}}>
          Get in touch
        </Button>
      </Stack>
    </Box>
  );
};

export default Contact;
