import { redirect } from 'next/navigation';

const Invite = async () => {
  redirect(
    'https://discord.com/oauth2/authorize?client_id=1290667540829311028&permissions=8&integration_type=0&scope=bot'
  );
};

export default Invite;
