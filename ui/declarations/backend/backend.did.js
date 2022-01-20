export const idlFactory = ({ IDL }) => {
  const Image = IDL.Vec(IDL.Nat8);
  const NewProfile = IDL.Record({
    'bio' : IDL.Text,
    'img' : Image,
    'lastName' : IDL.Text,
    'firstName' : IDL.Text,
  });
  const Link = IDL.Text;
  const NewProject = IDL.Record({
    'title' : IDL.Text,
    'wetransferLink' : Link,
    'goal' : IDL.Float64,
    'twitterLink' : Link,
    'tags' : IDL.Vec(IDL.Text),
    'description' : IDL.Text,
    'discordLink' : Link,
    'story' : IDL.Text,
    'category' : IDL.Text,
    'coverImg' : Image,
    'nftVolume' : IDL.Nat,
    'walletId' : IDL.Text,
  });
  const ProjectId = IDL.Text;
  const UserId = IDL.Principal;
  const Project__1 = IDL.Record({
    'id' : ProjectId,
    'title' : IDL.Text,
    'wetransferLink' : Link,
    'owner' : UserId,
    'goal' : IDL.Float64,
    'twitterLink' : Link,
    'tags' : IDL.Vec(IDL.Text),
    'description' : IDL.Text,
    'discordLink' : Link,
    'story' : IDL.Text,
    'category' : IDL.Text,
    'coverImg' : Image,
    'nftVolume' : IDL.Nat,
    'walletId' : IDL.Text,
  });
  const Profile = IDL.Record({
    'id' : UserId,
    'bio' : IDL.Text,
    'img' : Image,
    'lastName' : IDL.Text,
    'firstName' : IDL.Text,
  });
  const UserId__1 = IDL.Principal;
  const Profile__1 = IDL.Record({
    'id' : UserId,
    'bio' : IDL.Text,
    'img' : Image,
    'lastName' : IDL.Text,
    'firstName' : IDL.Text,
  });
  const Project = IDL.Record({
    'id' : ProjectId,
    'title' : IDL.Text,
    'wetransferLink' : Link,
    'owner' : UserId,
    'goal' : IDL.Float64,
    'twitterLink' : Link,
    'tags' : IDL.Vec(IDL.Text),
    'description' : IDL.Text,
    'discordLink' : Link,
    'story' : IDL.Text,
    'category' : IDL.Text,
    'coverImg' : Image,
    'nftVolume' : IDL.Nat,
    'walletId' : IDL.Text,
  });
  const ProjectWithOwner = IDL.Record({
    'owner' : Profile__1,
    'project' : Project,
  });
  return IDL.Service({
    'createFirstProject' : IDL.Func([NewProfile, NewProject], [Project__1], []),
    'createProfile' : IDL.Func([NewProfile], [], []),
    'createProject' : IDL.Func([NewProject], [Project__1], []),
    'getMyProfile' : IDL.Func([], [Profile], ['query']),
    'getMyProjects' : IDL.Func([], [IDL.Vec(Project__1)], ['query']),
    'getOwnId' : IDL.Func([], [UserId__1], ['query']),
    'getOwnIdText' : IDL.Func([], [IDL.Text], ['query']),
    'getProfile' : IDL.Func([UserId__1], [Profile], ['query']),
    'getProjects' : IDL.Func([UserId__1], [IDL.Vec(Project__1)], ['query']),
    'greet' : IDL.Func([], [IDL.Text], []),
    'healthcheck' : IDL.Func([], [IDL.Bool], []),
    'listProjects' : IDL.Func([], [IDL.Vec(ProjectWithOwner)], ['query']),
    'searchProfiles' : IDL.Func([IDL.Text], [IDL.Vec(Profile)], ['query']),
    'updateProfile' : IDL.Func([Profile], [], []),
  });
};
export const init = ({ IDL }) => { return []; };
