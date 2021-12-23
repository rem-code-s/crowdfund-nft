// Make the Connectd app's public methods available locally
// import Connectd "canister:connectd";
import Debug "mo:base/Debug";
import Database "./database";
import Principal "mo:base/Principal";
import Types "./types";
import Utils "./utils";

actor CrowdFundNFT {
    var directory: Database.Directory = Database.Directory();

    type NewProfile = Types.NewProfile;
    type NewProject = Types.NewProject;
    type Profile = Types.Profile;
    type Project = Types.Project;
    type UserId = Types.UserId;

    // Healthcheck

    public func healthcheck(): async Bool { true };

    // Profiles

    public shared(msg) func createProfile(profile: NewProfile): async () {
        Debug.print(Principal.toText(msg.caller));
        directory.createOne(msg.caller, profile);
    };

    public shared(msg) func updateProfile(profile: Profile): async () {
        if(Utils.hasAccess(msg.caller, profile)) {
            directory.updateOne(profile.id, profile);
        };
    };

    public query func getProfile(userId: UserId): async Profile {
        Utils.getProfile(directory, userId)
    };

    public query func searchProfiles(term: Text): async [Profile] {
        directory.findBy(term)
    };

    // Projects

    public shared(msg) func createProject(project: NewProject): async Project {
        directory.makeProject(msg.caller, project)
    };

    // Connections

    // public shared(msg) func connect(userId: UserId): async () {
    //     // Call Connectd's public methods without an API
    //     await Connectd.connect(msg.caller, userId);
    // };

    // public func getConnections(userId: UserId): async [Profile] {
    //     let userIds = await Connectd.getConnections(userId);
    //     directory.findMany(userIds)
    // };

    // public shared(msg) func isConnected(userId: UserId): async Bool {
    //     let userIds = await Connectd.getConnections(msg.caller);
    //     Utils.includes(userId, userIds)
    // };

    // User Auth

    public shared query(msg) func getOwnId(): async UserId { msg.caller }

};
