import { useSelector, useDispatch } from "react-redux";
import { retrySaveCart, clearError } from "./cart-persistence-slice";
import Modal from "../components/UI/Modal";
import ModalDialog from "../components/UI/ModalDialog";

function CartPersistenceErrorModalContent() {
    const { isSaving: isRetrying } = useSelector(state => state.cartPersistence);
    const dispatch = useDispatch();

    const retryHandler = () => dispatch(retrySaveCart());
    const cancelHandler = () => dispatch(clearError());

    let modalContent = (
        <ModalDialog
            message="Failed to update cart. Please try again."
            proceedButtonText="Retry"
            cancelButtonText="Cancel"
            onProceed={retryHandler}
            onCancel={cancelHandler}
        />
    );

    if (isRetrying) {
        modalContent = <h2>Retrying...</h2>;
    }

    return (
        <Modal onBackgroundClick={cancelHandler}>
            {modalContent}
        </Modal>
    );
}

function CartPersistenceErrorModal() {
    const { isError } = useSelector(state => state.cartPersistence);

    return isError
        ? <CartPersistenceErrorModalContent />
        : null;
}

export default CartPersistenceErrorModal;