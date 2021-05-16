<?php

namespace Database\Seeders;

use App\Models\User;
use App\Models\UserInvite;
use Carbon\Carbon;
use Carbon\Traits\Creator;
use Cmgmyr\Messenger\Models\Participant;
use Cmgmyr\Messenger\Models\Thread;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;
use Schema;
use Cmgmyr\Messenger\Models\Message;

class DatabaseSeeder extends Seeder
{
    protected $userSean;
    protected $userTestDummy;
    protected $userTestBuddy;

    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {

        // Clear users & invites
        Schema::disableForeignKeyConstraints();
        User::truncate();
        UserInvite::truncate();
        Thread::truncate();
        Message::truncate();
        Participant::truncate();
        Schema::enableForeignKeyConstraints();

        // Create 100 invites
        for ($x = 0; $x <= 100; $x++) {
            UserInvite::create([
                'code' => Str::random(50)
            ]);
        }

        $this->seedUsers();
        $this->seedMessages();
    }

    public function seedUsers() {
        // Create my user
        $this->userSean = User::create([
            'name' => 'Sean',
            'email' => 'sean@portally.devel',
            'date_of_birth' => '1990-08-15',
            'password' => Hash::make('password'),
        ]);

        // Create my user
        $this->userTestDummy = User::create([
            'name' => 'Test Dummy',
            'email' => 'test@portally.devel',
            'date_of_birth' => '1996-10-20',
            'password' => Hash::make('password'),
        ]);

        // Create my user
        $this->userTestBuddy = User::create([
            'name' => 'Test Buddy',
            'email' => 'test-buddy@portally.devel',
            'date_of_birth' => '1992-10-20',
            'password' => Hash::make('password'),
        ]);
    }

    public function seedMessages() {
        /**
         * Conversation between User Sean & User Test Buddy
         */
        $thread = Thread::create([
            'subject' => "Private Chat",
        ]);
        // Sender
        Participant::create([
            'thread_id' => $thread->id,
            'user_id' => $this->userSean->getAuthIdentifier(),
            'last_read' => new Carbon,
        ]);
        // Recipients
        $thread->addParticipant($this->userTestBuddy->getAuthIdentifier());

        $x = 1;
        while($x <= 5) {
            // Message
            Message::create([
                'thread_id' => $thread->id,
                'user_id' => $this->userSean->getAuthIdentifier(),
                'body' => "There is no strife, no prejudice, no national conflict in outer space as yet. Its hazards are hostile to us all. Its conquest deserves the best of all mankind, and its opportunity for peaceful cooperation many never come again. But why, some say, the moon? Why choose this as our goal? And they may well ask why climb the highest mountain? Why, 35 years ago, fly the Atlantic? Why does Rice play Texas?

We choose to go to the moon. We choose to go to the moon in this decade and do the other things, not because they are easy, but because they are hard, because that goal will serve to organize and measure the best of our energies and skills, because that challenge is one that we are willing to accept, one we are unwilling to postpone, and one which we intend to win, and the others, too.",
            ]);

            Message::create([
                'thread_id' => $thread->id,
                'user_id' => $this->userSean->getAuthIdentifier(),
                'body' => "I believe that space travel will one day become as common as airline travel is today. I’m convinced, however, that the true future of space travel does not lie with government agencies — NASA is still obsessed with the idea that the primary purpose of the space program is science — but real progress will come from private companies competing to provide the ultimate adventure ride, and NASA will receive the trickle-down benefits.",
            ]);

            Message::create([
                'thread_id' => $thread->id,
                'user_id' => $this->userTestBuddy->getAuthIdentifier(),
                'body' => "The view of the earth from the moon fascinated me - a small disk, 240,000 mniles away. It was hard to think that that little thing held so many problems, so many frustrations. Raging nationalistic interests, famines, wars, pestilence don't show from that distance. I'm convinced that some wayward stranger in a space-craft, coming from some other part of the heavens, could look at earth and never know that it was inhabited at all. But the samw wayward stranger would certainly know instinctively that if the earth were inhabited, then the destinies of all who lived on it must inevitably be interwoven and joined. We are one hunk of ground, water, air, clouds, floating around in space. From out there it really is 'one world'.",
            ]);
            $x++;
        }

        /**
         * Conversation between User Sean & User Test Buddy & User Test Dummy
         */
        $thread = Thread::create([
            'subject' => "Group Chat",
        ]);

        // Sender
        Participant::create([
            'thread_id' => $thread->id,
            'user_id' => $this->userTestBuddy->getAuthIdentifier(),
            'last_read' => new Carbon,
        ]);

        // Participants
        $thread->addParticipant($this->userSean->getAuthIdentifier());
        $thread->addParticipant($this->userTestDummy->getAuthIdentifier());


        $x = 1;
        while($x <= 5) {
            Message::create([
                'thread_id' => $thread->id,
                'user_id' => $this->userTestBuddy->getAuthIdentifier(),
                'body' => "Spaceflight will never tolerate carelessness, incapacity, and neglect. Somewhere, somehow, we screwed up. It could have been in design, build, or test. Whatever it was, we should have caught it. We were too gung ho about the schedule and we locked out all of the problems we saw each day in our work.",
            ]);

            Message::create([
                'thread_id' => $thread->id,
                'user_id' => $this->userSean->getAuthIdentifier(),
                'body' => "“Every element of the program was in trouble and so were we. The simulators were not working, Mission Control was behind in virtually every area, and the flight and test procedures changed daily. Nothing we did had any shelf life. Not one of us stood up and said, ‘Dammit, stop!’ I don’t know what Thompson’s committee will find as the cause, but I know what I find. We are the cause! We were not ready! We did not do our job. We were rolling the dice, hoping that things would come together by launch day, when in our hearts we knew it would take a miracle. We were pushing the schedule and betting that the Cape would slip before we did.",
            ]);

            Message::create([
                'thread_id' => $thread->id,
                'user_id' => $this->userTestDummy->getAuthIdentifier(),
                'body' => "“From this day forward, Flight Control will be known by two words: ‘Tough’ and ‘Competent.’ Tough means we are forever accountable for what we do or what we fail to do. We will never again compromise our responsibilities. Every time we walk into Mission Control we will know what we stand for. Competent means we will never take anything for granted. We will never be found short in our knowledge and in our skills. Mission Control will be perfect.",
            ]);
            $x++;
        }
    }
}
