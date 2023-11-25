exports.Login=class LoginTest{

 constructor(page){
    this.page=page

     this.user=this.page.getByPlaceholder('Username')
    this.password=this.page.getByPlaceholder('Password')



}

async login_url(){

     await this.page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
}

async login_with_credentials(username, password){

    await this.user.fill(username)
    await this.password.fill(password)
    await this.page.getByRole('button', { name: 'Login' }).click()

}



}