import { useForm } from "react-hook-form";

import {
  Box,
  TextField,
  Button,
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
  InputLabel,
  Select,
  MenuItem,
  Checkbox,
} from "@mui/material";

import { forms } from "@/config/forms";

const FormsComponent = ({ name, button, btnStyle, def, callback, clear }) => {
  const { register, handleSubmit } = useForm({
    defaultValues: def,
  });

  const form = forms.find((form) => form.name === name);

  const onSubmit = (data) => callback(data);

  return (
    <Box sx={{ width: "100%" }}>
      {Object.entries(form.fields).map(([name, field]) => {
        switch (field.type) {
          case "radio":
            return (
              <Box>
                <FormControl margin="normal">
                  <FormLabel>{field.label}</FormLabel>
                  <RadioGroup defaultValue={def && def[name]} row>
                    {field.items.map((item) => (
                      <FormControlLabel
                        value={item.value}
                        {...register(name)}
                        label={item.label}
                        control={<Radio />}
                      />
                    ))}
                  </RadioGroup>
                </FormControl>
                <br />
              </Box>
            );
          case "checkbox":
            return (
              <Box>
                <FormControl margin="normal">
                  <FormLabel>{field.label}</FormLabel>
                  <RadioGroup defaultValue={def && def[name]} row>
                    {field.items.map((item) => (
                      <FormControlLabel
                        value={item.value}
                        {...register(name)}
                        label={item.label}
                        control={<Checkbox />}
                      />
                    ))}
                  </RadioGroup>
                </FormControl>
                <br />
              </Box>
            );
          case "select":
            return (
              <FormControl margin="normal" fullWidth>
                <InputLabel>{field.label}</InputLabel>
                <Select
                  defaultValue={def && def[name]}
                  {...register(name)}
                  placeholder={field.placeholder}
                  label={field.label}
                >
                  {field.options.map((option) => (
                    <MenuItem value={option.value}>{option.label}</MenuItem>
                  ))}
                </Select>
              </FormControl>
            );
          case "textarea":
            return (
              <TextField
                key={name}
                {...register(name)}
                label={field.label}
                type="text"
                placeholder={field.placeholder}
                margin="normal"
                rows={5}
                fullWidth
                multiline
              />
            );
          default:
            return (
              <TextField
                key={name}
                {...register(name)}
                label={field.label}
                type={field.secure ? "password" : field.type}
                placeholder={field.placeholder}
                margin="normal"
                fullWidth
              />
            );
        }
      })}
      {button && (
        <Button
          variant="contained"
          color="primary"
          size="large"
          onClick={handleSubmit(onSubmit)}
          sx={{ color: "white", mt: 1 }}
          fullWidth={btnStyle.fullWidth}
          disabled={btnStyle.disabled}
          disableElevation
        >
          {button}
        </Button>
      )}
      {Object.keys(def).length > 0 && (
        <Button
          variant="outlined"
          color="primary"
          size="large"
          onClick={clear}
          sx={{ mt: 1 }}
          fullWidth={btnStyle.fullWidth}
          disabled={btnStyle.disabled}
          disableElevation
        >
          Close update
        </Button>
      )}
    </Box>
  );
};

export default FormsComponent;
