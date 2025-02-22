import DialogModalV3 from "@components/UI/DialogModalV3";
import EthereumAddress from "@components/UI/EtheuremAddress";
import VotingWidget from "@components/Voting";
import useCastVotes from "@hooks/useCastVotes";
import { useContestStore } from "@hooks/useContest/store";
import { useUserStore } from "@hooks/useUser/store";
import LayoutContestPrompt from "@layouts/LayoutViewContest/Prompt";
import LayoutContestProposal from "@layouts/LayoutViewContest/Proposal";
import { FC, useEffect } from "react";
import { Proposal } from "../ProposalContent";

interface DialogModalVoteForProposalProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  proposal: Proposal;
}

export const DialogModalVoteForProposal: FC<DialogModalVoteForProposalProps> = ({ isOpen, setIsOpen, proposal }) => {
  const { downvotingAllowed, contestPrompt } = useContestStore(state => state);
  const {
    currentUserAvailableVotesAmount,
    decreaseCurrentUserAvailableVotesAmount,
    increaseCurrentUserTotalVotesCast,
    increaseCurrentUserAvailableVotesAmount,
    decreaseCurrentUserTotalVotesCast,
  } = useUserStore(state => state);

  const { castVotes, isSuccess } = useCastVotes();

  const onSubmitCastVotes = (amount: number, isUpvote: boolean) => {
    decreaseCurrentUserAvailableVotesAmount(amount);
    increaseCurrentUserTotalVotesCast(amount);

    castVotes(amount, isUpvote).catch(error => {
      increaseCurrentUserAvailableVotesAmount(amount);
      decreaseCurrentUserTotalVotesCast(amount);
    });
  };

  useEffect(() => {
    if (isSuccess) setIsOpen(false);
  }, [isSuccess, setIsOpen]);

  return (
    <DialogModalV3
      title="Cast your votes"
      isOpen={isOpen}
      setIsOpen={setIsOpen}
      className="xl:w-[1110px] 3xl:w-[1300px]"
    >
      <div className="flex flex-col gap-4 md:pl-[50px] lg:pl-[100px] mt-[60px] mb-[60px]">
        <LayoutContestPrompt prompt={contestPrompt} hidePrompt />
        <EthereumAddress ethereumAddress={proposal.authorEthereumAddress} shortenOnFallback={true} />
        <div className="flex flex-col gap-7">
          <LayoutContestProposal proposal={proposal} />
          <VotingWidget
            amountOfVotes={currentUserAvailableVotesAmount}
            downvoteAllowed={downvotingAllowed}
            onVote={onSubmitCastVotes}
          />
        </div>
      </div>
    </DialogModalV3>
  );
};

export default DialogModalVoteForProposal;
