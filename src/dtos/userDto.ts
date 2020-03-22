import {IsEmail, IsNotEmpty, MinLength, IsString} from "class-validator";

class CreateUserDto {
  @IsString()
  @IsNotEmpty({
    message: "First name is required"
  })
  public firstName: string;

  @IsString()
  @IsNotEmpty({
    message: "Last name is required"
  })
  public lastName: string;

  @IsString()
  @IsNotEmpty({
    message: "Country is required"
  })
  public country: string;

  @IsString()
  @IsNotEmpty({
    message: "City is required"
  })
  public city: string;

  @IsEmail(undefined, {
    message: "Email address must be a valid email address"
  })
  public email: string;

  @IsString()
  @IsNotEmpty({
    message: "Password is required"
  })
  @MinLength(8, {
    message: "Password should at least contain eight characters"
  })
  public password: string;
}

export default CreateUserDto;