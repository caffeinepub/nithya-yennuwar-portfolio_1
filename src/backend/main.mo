import Iter "mo:core/Iter";
import Map "mo:core/Map";
import Time "mo:core/Time";
import Order "mo:core/Order";
import Array "mo:core/Array";
import Runtime "mo:core/Runtime";

actor {
  type Submission = {
    name : Text;
    email : Text;
    phone : ?Text;
    message : Text;
    timestamp : Int;
  };

  module Submission {
    public func compare(sub1 : Submission, sub2 : Submission) : Order.Order {
      Int.compare(sub2.timestamp, sub1.timestamp);
    };
  };

  let submissions = Map.empty<Int, Submission>();

  public shared ({ caller }) func submit(name : Text, email : Text, phone : ?Text, message : Text) : async () {
    let timestamp = Time.now();
    let submission : Submission = {
      name;
      email;
      phone;
      message;
      timestamp;
    };
    submissions.add(timestamp, submission);
  };

  public query ({ caller }) func getAllSubmissions() : async [Submission] {
    submissions.values().toArray().sort();
  };

  public query ({ caller }) func getSubmissionById(id : Int) : async Submission {
    switch (submissions.get(id)) {
      case (null) {
        Runtime.trap("Submission with id " # id.toText() # " does not exist.");
      };
      case (?submission) { submission };
    };
  };
};
