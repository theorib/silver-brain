# Setting up an AWS Account
[source](https://awslaunchgoat.com/docs/first-steps/root)
## Create Root Account

Ready to embark on your AWSLaunchGOAT 🐐 journey? Let's get you set up step by step.

### 1. Create an AWS Account

If you don't already have an AWS account, you'll need to create one:

- **Go to the AWS Signup Page**: Visit [aws.amazon.com](https://aws.amazon.com/) and click on **"Create an AWS Account"**.
- **Provide Your Email**: Enter your email address and choose a secure password.
- **AWS Account Name**: Input a name for your AWS account (this could be your company or project name).
- **Billing Information**: Enter your billing details. AWS may place a small, temporary charge on your card for verification.
- **Identity Verification**: Provide a phone number for verification via SMS or voice call.
- **Select a Support Plan**: Choose the **Basic (Free)** plan unless you require advanced support.
- **Confirmation**: Wait for a confirmation email that your account is activated.

### 2. Enable MFA on Root Account 🔐

Enhance security by enabling Multi-Factor Authentication (MFA) on your AWS root account. This is a crucial security best practice to protect your account from unauthorized access.

- **Follow the Tutorial**: Use this [step-by-step video guide](https://www.youtube.com/watch?v=DEOBYAHfyII) to enable MFA on your root account.
- **Choose MFA Device**: You can use a virtual MFA device (like Google Authenticator) or a hardware MFA device.
- **Activate MFA**: In the AWS Management Console, navigate to **"My Security Credentials"** and follow the prompts to activate MFA.

### 3. Never Create Access Keys for your Root Account 🚫

For daily operations, **never use the root account**. It's crucial for security to minimize the use of your AWS root account and avoid creating access keys for it.

**Why Avoid Using Root Access Keys?**

- **Unrestricted Access**: Root access keys provide full access to all resources in your AWS account without any limitations.
- **Security Risk**: If someone gains access to your root access keys, they can control or delete everything in your AWS environment.
- **Best Practices**: AWS recommends not using the root account for everyday tasks and avoiding the creation of root access keys.

Instead, in the next section we will create two accounts: production and staging.

## Selecting an AWS Region 🌍

Before we create accounts, choosing the right AWS region is essential for optimizing latency, ensuring compliance, and managing costs. Here's how you can select and set your preferred AWS region.

### Why the Region Matters

- **Latency**: Selecting a region geographically closer to your users reduces latency.
- **Cost**: AWS service pricing can vary between regions.
- **Compliance**: Some data must reside within specific geographical boundaries due to legal requirements.

### How to Select a Region

#### In the AWS Management Console

1. **Log In to the AWS Console**: Go to the [AWS Management Console](https://console.aws.amazon.com/) and sign in.
    
2. **Locate the Region Selector**: At the top right corner of the console, you'll find the region selector dropdown menu. Click the dropdown and select the region that best suits your needs
    
    ![AWS Region Selector](https://awslaunchgoat.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fregion.8e9d2ea6.png&w=1200&q=75)

## Setting Up Production and Staging Accounts

To effectively manage and secure your environments, it's best practice to create separate AWS accounts for **production** and **staging**. We'll use the root account to set up an AWS Organisation and then create individual accounts for each environment.

### 1. Create an AWS Organisation

AWS Organizations allows you to centrally manage multiple AWS accounts.

- **Access AWS Organisations**: Navigate to **AWS Organisations**.

![Create Permission Set](https://awslaunchgoat.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Forg-1.32d5b8ec.png&w=3840&q=75)

- Click on the **Create an organization** button. Then click on **Add an AWS account**.

![Create Permission Set](https://awslaunchgoat.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Forg-2.686736dd.png&w=2048&q=75)

### 2. Add Production and Staging Accounts[](https://awslaunchgoat.com/docs/first-steps/org#2-add-production-and-staging-accounts)

Now, we'll create two accounts within your organization: one for production (`prod`) and one for staging (`staging`).

![Create Permission Set](https://awslaunchgoat.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Forg-3.41514520.png&w=2048&q=75)

- **Fill in Account Details**:
    
    - **Account Name**: Enter `prod` for the production account.
    - **Email Address**: Each AWS account requires a unique email. i.e. prod@domainname
    - **IAM Role Name**: Leave it as the default **`OrganizationAccountAccessRole`**.
    - **Create Account**: Click **"Create AWS account"**.
- **Repeat for Staging Account**: Follow the same steps to create the `staging` account.
    
    - **Account Name**: Enter `staging` for the staging account.
    - **Email Address**: Each AWS account requires a unique email. i.e. staging@domainname
    - **IAM Role Name**: Leave it as the default **`OrganizationAccountAccessRole`**.
    - **Create Account**: Click **"Create AWS account"**.

![Create Permission Set](https://awslaunchgoat.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Forg-12.164a89b3.png&w=1920&q=75)

⚠️ If you don't have a business email and want to do this for practice, you can use Gmail. i.e. [prodCompanyName@gmail.com](mailto:prodCompanyName@gmail.com) or [stagingCompanyName@gmail.com](mailto:stagingCompanyName@gmail.com)

Great job, now it's time to move on to **IAM Identity Center**.

## Setting Up User Accounts

We have successfully created accounts for production and staging. However, what if multiple users need access to the production and staging accounts with different permission? Let's go through the steps to grant other user accounts access to production and staging.

### 1. Create a Group and User

- In the AWS Management Console, go to **IAM Identity Center** (formerly AWS Single Sign-On).

![Create Permission Set](https://awslaunchgoat.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Forg-4.d5bc07d3.png&w=1920&q=75)

- **Enable IAM Identity Center**:
    - If it's not already enabled, click on **"Enable"** and choose the **Enable with AWS Organizations (Recommended)** option.

![Create Permission Set](https://awslaunchgoat.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Forg-5.cf8ac7df.png&w=640&q=75)

- **Create a Group**:
    - Navigate to **"Groups"**.
    - Click **"Create group"**.
    - **Group Name**: Enter a name `AdminAccess`.
    - **Create Group**: Click **"Create group"**.

![Create Permission Set](https://awslaunchgoat.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Forg-6.695b63f8.png&w=3840&q=75)

Groups simplify permission management by allowing you to assign permissions to multiple users at once.

- **Add a User**:
    - Go to **"Users"**.
    - Click **"Add user"**.
    - **User Details**:
        - **Username**: Use the first and last name or a preferred alias.
        - **Email Address**: Enter the email of the authorized person.
        - **Password Setup**: Choose **"Send an email to this user with password setup instructions"**.
        - **Additional Fields**: Fill in as desired.
    - **Next**: Click **"Next"**.

![Create Permission Set](https://awslaunchgoat.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Forg-7.621788d7.png&w=3840&q=75)

- **Assign User to Group**:
    - **Select Groups**: Choose the `AdminAccess`.
    - **Next**: Proceed to the next step.
    - **Review and Add User**: Confirm the details and click **"Add user"**.

**You'll receive an email with instructions to set up your password. Make sure you also set up the MFA to protect your account!!!**

### 2. Set Up Permission Set

Permission sets define the level of access users have within your AWS accounts.

- **Create Permission Sets**:
    
    - On the left sidebar under **Multi-account permissions**, select **"Permission sets"**.
    - Click **"Create permission set"**.
- **AdministratorAccess Permission Set**:
    
    - **Choose Permission Type**: Select **"Predefined permission set"**.
    - **Select Policy**: Choose **"AdministratorAccess"**.![Create Permission Set](https://awslaunchgoat.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Forg-8.cbfa9c75.png&w=3840&q=75)
    - **Session Duration**: Set how long a user can be signed in before re-authenticating. 1 hour is recommended.
    - **Create**: click **"Next"** then click **"Create"**.![Create Permission Set](https://awslaunchgoat.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Forg-9.82485341.png&w=1920&q=75)

### 3. Assign Permissions to Accounts

Now, we'll assign our group to both the production and staging accounts with the appropriate permission sets.

- Click on **"AWS accounts"** under **Multi-account permissions**.

![Create Permission Set](https://awslaunchgoat.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Forg-11.f41c8546.png&w=640&q=75)

- **Select Accounts**:
    - Check the boxes next to both `prod` and `staging` accounts.
    - Click **"Assign users or groups"**.

![Create Permission Set](https://awslaunchgoat.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Forg-13.32ef34fb.png&w=3840&q=75)

- **Assign Group**:
    - **Select Users or Groups**: Choose the `AdminAccess`.
    - **Next**: Click to proceed.

![Create Permission Set](https://awslaunchgoat.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Forg-10.3b872f10.png&w=1920&q=75)

- **Select Permission Set**:
    
    - Choose **"AdministratorAccess"**.
    
    ![Create Permission Set](https://awslaunchgoat.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Forg-14.9f6abf46.png&w=1920&q=75)
    
    - **Next**: Review and confirm the assignments.
        
    - **Submit**: Click **"Submit"** to finalize.
        

### 🎉 Great Job!

You've successfully:

- Created separate AWS accounts for production and staging.
- Created a group and user for efficient permission management.
- Established permission set to control access levels.
- Assigned permission to your account.

We've only created **AdministratorAccess** permission set, but in the real world, you can create permissions like ReadOnlyAccess or even customize them for each user account or group.

---

_Sticking to best practices can be time-consuming, but it's crucial for security and scalability. Kudos for making it through this essential setup!_