
import { addScriptHook, W3TS_HOOK } from "@zerozeroeight/w3ts";

//===========================================================================
// Trigger: FC Minus GUI
//
// much the same as fc plus except it has an if/then/else function that resets the custom value of farms, to make "destroy last farm" work properly
//===========================================================================
const Trig_FC_Minus_GUI_Conditions = (): boolean => {


	if ( ( ! ( GetUnitTypeId( GetTriggerUnit() ) !== FourCC( "u000" ) ) ) ) {

		return false;

	}

	return true;

};


const Trig_FC_Minus_GUI_Func002Func001Func001C = (): boolean => {


	if ( ( ! ( GetUnitUserData( GetKillingUnitBJ() ) >= 6 ) ) ) {

		return false;

	}

	return true;

};


const Trig_FC_Minus_GUI_Func002Func001C = (): boolean => {


	if ( ( ! ( udg_RoundInfo[ 1 ] !== 10 ) ) ) {

		return false;

	}

	return true;

};


const Trig_FC_Minus_GUI_Func002Func002Func001Func001C = (): boolean => {


	if ( ( ! ( UnitHasItemOfTypeBJ( GetKillingUnitBJ(), FourCC( "I019" ) ) === true ) ) ) {

		return false;

	}

	return true;

};


const Trig_FC_Minus_GUI_Func002Func002Func001C = (): boolean => {


	if ( ( ! ( UnitHasItemOfTypeBJ( GetKillingUnitBJ(), FourCC( "I01A" ) ) === true ) ) ) {

		return false;

	}

	return true;

};


const Trig_FC_Minus_GUI_Func002Func002Func002C = (): boolean => {


	if ( ( ! ( udg_StampedeSpeed[ GetConvertedPlayerId( GetOwningPlayer( GetKillingUnitBJ() ) ) ] < 1 ) ) ) {

		return false;

	}

	return true;

};


const Trig_FC_Minus_GUI_Func002Func002C = (): boolean => {


	if ( ( ! ( GetUnitAbilityLevelSwapped( FourCC( "A00S" ), GetKillingUnitBJ() ) > 0 ) ) ) {

		return false;

	}

	return true;

};


const Trig_FC_Minus_GUI_Func002C = (): boolean => {


	if ( ( ! ( IsUnitType( GetDyingUnit(), UNIT_TYPE_STRUCTURE ) === true ) ) ) {

		return false;

	}

	return true;

};


const Trig_FC_Minus_GUI_Actions = (): void => {


	if ( ( Trig_FC_Minus_GUI_Func002C() ) ) {


		if ( ( Trig_FC_Minus_GUI_Func002Func001C() ) ) {


			if ( ( Trig_FC_Minus_GUI_Func002Func001Func001C() ) ) {

				RemoveItem( GetItemOfTypeFromUnitBJ( GetKillingUnitBJ(), FourCC( "I01R" ) ) )

			} else {

			null

			}

			SetUnitUserData( GetKillingUnitBJ(), 0 )

		} else {

		null

		}


		if ( ( Trig_FC_Minus_GUI_Func002Func002C() ) ) {


			if ( ( Trig_FC_Minus_GUI_Func002Func002Func001C() ) ) {

				udg_StampedeSpeed[ GetConvertedPlayerId( GetOwningPlayer( GetKillingUnitBJ() ) ) ] = ( udg_StampedeSpeed[ GetConvertedPlayerId( GetOwningPlayer( GetKillingUnitBJ() ) ) ] - ( GetUnitStateSwap( UNIT_STATE_MAX_LIFE, GetTriggerUnit() ) / 30 ) );

			} else {


				if ( ( Trig_FC_Minus_GUI_Func002Func002Func001Func001C() ) ) {

					udg_StampedeSpeed[ GetConvertedPlayerId( GetOwningPlayer( GetKillingUnitBJ() ) ) ] = ( udg_StampedeSpeed[ GetConvertedPlayerId( GetOwningPlayer( GetKillingUnitBJ() ) ) ] - ( GetUnitStateSwap( UNIT_STATE_MAX_LIFE, GetTriggerUnit() ) / 50 ) );

				} else {

					udg_StampedeSpeed[ GetConvertedPlayerId( GetOwningPlayer( GetKillingUnitBJ() ) ) ] = ( udg_StampedeSpeed[ GetConvertedPlayerId( GetOwningPlayer( GetKillingUnitBJ() ) ) ] - ( GetUnitStateSwap( UNIT_STATE_MAX_LIFE, GetTriggerUnit() ) / 40 ) );

				}


			}


			if ( ( Trig_FC_Minus_GUI_Func002Func002Func002C() ) ) {

				udg_StampedeSpeed[ GetConvertedPlayerId( GetOwningPlayer( GetKillingUnitBJ() ) ) ] = 1;

			} else {

			null

			}

			CreateTextTagUnitBJ( ( "|cffADD8E6" + I2S( R2I( ( udg_StampedeSpeed[ GetConvertedPlayerId( GetOwningPlayer( GetKillingUnitBJ() ) ) ] / 0.03 ) ) ) ), GetKillingUnitBJ(), 0, 9.8, 100, 100, 100, 0 )
			SetTextTagVelocityBJ( GetLastCreatedTextTag(), 64, 90 )
			SetTextTagPermanentBJ( GetLastCreatedTextTag(), false )
			SetTextTagLifespanBJ( GetLastCreatedTextTag(), 3.2 )
			SetTextTagFadepointBJ( GetLastCreatedTextTag(), 1.6 )

		} else {

		null

		}


	} else {

	null

	}

	TriggerSleepAction( 2 )
	RemoveUnit( GetTriggerUnit() )

};


//===========================================================================
const InitTrig_FC_Minus_GUI = (): void => {

	gg_trg_FC_Minus_GUI = CreateTrigger();
	TriggerRegisterAnyUnitEventBJ( gg_trg_FC_Minus_GUI, EVENT_PLAYER_UNIT_DEATH )
	TriggerAddCondition( gg_trg_FC_Minus_GUI, Condition( Trig_FC_Minus_GUI_Conditions ) )
	TriggerAddAction( gg_trg_FC_Minus_GUI, Trig_FC_Minus_GUI_Actions )

};

addScriptHook( W3TS_HOOK.MAIN_AFTER, (): void => {

  InitTrig_FC_Minus_GUI();
} );
